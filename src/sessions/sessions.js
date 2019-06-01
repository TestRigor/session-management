import Cookies from 'js-cookie';
import Uuid from 'uuid/v4';

const SESSION_COOKIE = '06a05362-a219-435f-b0c3-3d072da0a881-ts-session';

export default class Session {

  constructor(options) {

    const config = options || {};

    if (!this.isThereASession()) {
      this.createSession(config.domain);
    }
  }

  isThereASession() {
    return this.getSession();
  }

  getSession() {
    return Cookies.get(SESSION_COOKIE);
  }

  createSession(domain) {
    let clientId = Uuid();

    Cookies.set(SESSION_COOKIE, clientId, {domain});
  }

}
