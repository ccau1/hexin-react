import cookies from 'lib/cookies';

class RequestConnection {
  name: string;
  urlBase: string;
  accessToken: Object;
  options: Object;

  constructor(urlBase = '', opts = {}, accessToken = null, name = '') {
    this.name = name;
    this.setUrlBase(urlBase);
    this.setOptions(opts);
    this.setAccessToken(accessToken);
  }

  getBaseAccessToken() {
    return {
      client: '',
      expires_at: -1,
      expires_in: -1,
      options: {},
      params: {},
      refresh_token: '',
      token: ''
    };
  }

  getBaseOptions() {
    return {
      header_format: 'Bearer %s',
      headers: {
        'accept-language': 'en'
      }
    };
  }

  getUrlBase() {
    return this.urlBase;
  }

  setUrlBase(urlBase) {
    this.urlBase = urlBase;
    if (/^.*\/$/.test(this.urlBase)) {
      this.urlBase = urlBase.slice(0, urlBase.length - 1);
    }
  }

  killAccessToken() {
    const cookieName = 'jwt_' + this.name;
    this.accessToken = this.getBaseAccessToken();
    cookies.save(cookieName, null, -1);
  }

  setAccessToken(accessToken) {
    const cookieName = 'jwt_' + this.name;

    if (!accessToken) {
      const cookiedAccessToken = cookies.load(cookieName);
      if (cookiedAccessToken) {
        this.accessToken = JSON.parse(cookiedAccessToken);
      }
    } else {
      this.accessToken = {...(this.accessToken || this.getBaseAccessToken()), ...accessToken};
      cookies.save(cookieName, JSON.stringify(this.accessToken), 100);
    }
  }

  getAccessToken() {
    return this.accessToken;
  }

  hasTokenExpired() {
    return !this.accessToken.token;
  }

  setHeaders(headers) {
    this.setOptions({headers: Object.assign({}, this.getOptions().headers, headers)});
  }

  setOptions(opts) {
    const origOptions = this.options || this.getBaseOptions();
    this.options = Object.assign(true, {}, origOptions, opts);
  }

  getOptions() {
    return this.options;
  }

  request(url, options) {
    if (!/^\/.*$/.test(url)) {
      url = '/' + url;
    }
    if (this.getOptions().log) {
      console.log('fetch', this.getUrlBase() + url, this.optionsHandler(options));
    }
    return fetch(this.getUrlBase() + url, this.optionsHandler(options))
      .then((response) => {
        if (response.status >= 400) {
          return response.json().then(err => {
            throw err;
          });
        } else {
          return response.json();
        }
      });
  }

  optionsHandler(httpOptions) {
    let httpOpt = {...{headers: this.getOptions().headers}, ...httpOptions};

    if (!httpOpt.method) {
      httpOpt.method = 'GET';
    }

    if (!httpOpt.headers) {
      httpOpt.headers = {
        // 'Accept-Language': req.language,
        // 'X-Forwarded-For': req.headers['x-forwarded-for'] ||
        // req.connection.remoteAddress ||
        // req.socket.remoteAddress ||
        // req.connection.socket.remoteAddress
      };
    }
    if (httpOpt.data) {
      httpOpt.headers['Content-Type'] = 'application/json';
      httpOpt.body = JSON.stringify(httpOpt.data);
    }

    const accessToken = this.getAccessToken();
    if (accessToken && accessToken.token) {
      httpOpt.headers.Authorization = `Bearer ${accessToken.token}`;
    }
    return httpOpt;
  }
}

export default (url: string, options: Object, connectionName?: string): Object => {
  return (requestConnections[connectionName] || defaultRequestConnection).request(url, options);
};

export let defaultRequestConnection = null;
export let defaultRequestConnectionName = '';
export let requestConnections = {};

export const setHeaders = (name: string, headers: Object): void => {
  (name ? requestConnections[name] : defaultRequestConnection).setHeaders(headers);
};

export const setRequestConnection = (name: string, urlBase: string, options: Object, accessToken: Object): void => {
  if (!name) {
    throw new Error('### Request Connection require name');
  }
  requestConnections[name] = new RequestConnection(urlBase, options, accessToken, name);
  if (!defaultRequestConnection) {
    setDefaultConnection(name);
  }
};

export const setDefaultConnection = (name: string): void => {
  defaultRequestConnectionName = name;
  defaultRequestConnection = requestConnections[name];
};

export const getToken = (name: string): string => {
  return requestConnections[name].getAccessToken().token;
};

export const setToken = (name: string, token: string): void => {
  // can use this for now to skip the other parameters
  requestConnections[name].setAccessToken({token});
};

export const getAccessToken = (name: string): Object => {
  return requestConnections[name].getAccessToken();
};

export const hasTokenExpired = (name: string): Boolean => {
  return (name ? requestConnections[name] : defaultRequestConnection).hasTokenExpired();
};

export const setAccessToken = (accessToken: Object, name?: string): void => {
  (name ? requestConnections[name] : defaultRequestConnection).setAccessToken(accessToken);
};

export const killAccessToken = (name: string): void => {
  (name ? requestConnections[name] : defaultRequestConnection).killAccessToken();
};
