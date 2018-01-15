import { RouteStrategy } from "../Lib/route";
import { store } from "../Redux";

export default class extends RouteStrategy {
  unAuthRedirect = "/login";

  authenticate(roles: Array<string>, route): boolean {
    if (!roles) {
      return true;
    }
    const user = store.getState().account.user;
    let curUserRoles = [];

    if (user && user.roles) {
      curUserRoles = Array.isArray(user.roles)
        ? user.roles
        : user.roles.split("|");
    }

    if (roles.indexOf("anon") > -1) {
      return true;
      // } else if (!user) {
      //   return false;
    } else if (roles.indexOf("loggedIn") > -1 && user) {
      return true;
    } else if (curUserRoles.some(userRole => roles.indexOf(userRole) > -1)) {
      return true;
    } else {
      return false;
    }
  }
}
