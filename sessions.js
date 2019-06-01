(function (window, document) {

  var COOKIE = "ts-sessions";
  var SESSION = "Session";

  function getCookie() {
    var cookies = document.cookie.split(";");
    var length = cookies.length;
    for (var i = 0; i < length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie.length && cookie[0] === COOKIE) {
        return cookie[1];
      }
    }
  }

  function createCookie() {
    document.cookie = COOKIE + "=" + generateID() + ";domain=" + window.location.hostname;
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

  function getSession() {
    return getCookie();
  }

  init();

  window[SESSION] = {
    getSession: getSession
  }
})(window, document);