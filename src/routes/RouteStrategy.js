import {RouteStrategy} from 'lib/react-router';
import {store} from 'app';

export default class extends RouteStrategy {
  unAuthRedirect = '/login';

  authenticate(roles: Array<string>): boolean {
    const user = store.getState().account.user;
    let curUserRoles = [];

    if (user && user.roles) {
      curUserRoles = Array.isArray(user.roles) ? user.roles : user.roles.split('|');
    }

    if (roles.indexOf('anon') > -1) {
      return true;
    } else if (!user) {
      return false;
    } else if (roles.indexOf('loggedIn') > -1) {
      return true;
    } else if (curUserRoles.some(userRole => roles.indexOf(userRole) > -1)) {
      return true;
    } else {
      return false;
    }
  }
}
