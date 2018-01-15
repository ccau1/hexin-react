import apisauce from "apisauce";

const create = (baseURL = "") => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "Accept-Language": "en"
    },
    // 10 second timeout...
    timeout: 10000
  });
  const naviMonitor = response => console.info("api:: ", response);
  api.addMonitor(naviMonitor);

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const getToken = (username, password) =>
    api.post("auth/token", { username, password });
  const getAccountUser = () => api.get("account/user");

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //

  return {
    self: api,
    getToken,
    getAccountUser
  };
};

export default { create };
