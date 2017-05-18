import {RouteStrategy} from 'lib/react-router';
import {store} from 'app';

export default class extends RouteStrategy {
  unAuthRedirect = '/login';

  authenticate(roles: Array<string>): boolean {
    const user = store.getState().account.user;

    if (roles.indexOf('anon') > -1) {
      return true;
    } else if (!user) {
      return false;
    } else if (roles.indexOf('loggedIn') > -1) {
      return true;
    } else if (user.roles.some(userRole => roles.indexOf(userRole) > -1)) {
      return true;
    } else {
      return false;
    }
  }
}
