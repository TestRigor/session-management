(function (window, document) {

  var COOKIE = "TR-SESSION-ID";
  var SESSION = "Session";

  function getCookie() {
    var cookies = document.cookie.split(";");
    var length = cookies.length;
    for (var i = 0; i < length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie.length && cookie[0].trim() === COOKIE) {
        return cookie[1];
      }
    }
  }

  function createCookie() {
    document.cookie = COOKIE + "=" + generateID() + ";domain=" + currentDomain();
  }

  function currentDomain() {
    var hostname = window.location.hostname;
    var segments = hostname.split(".");
    if (segments && segments.length > 1) {
      return segments[segments.length - 2] + "." + segments[segments.length - 1];
    }
    return hostname;
  }

  function generateID() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    var charactersLength = characters.length;
    for (var i = 0; i < 20; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function init() {
    if (!getCookie()) {
      createCookie();
    }
  }

  function recreateSession() {
    createCookie();
  }

  function getSession() {
    return getCookie();
  }

  init();

  window[SESSION] = {
    getSession: getSession,
    recreateSession: recreateSession
  }
})(window, document);
