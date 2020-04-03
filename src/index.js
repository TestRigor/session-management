import { isValid, parse } from 'psl';

const COOKIE = 'TR-SESSION-ID';
const ipRegex = '((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}';

function getCookie() {
  let cookies = document.cookie.split(';');

  let length = cookies.length;

  for (let i = 0; i < length; i++) {
    let cookie = cookies[i].split('=');

    if (cookie.length && cookie[0].trim() === COOKIE) {
      return cookie[1];
    }
  }
  return '';
}

function generateID() {
  let result = '';

  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  let charactersLength = characters.length;

  for (let i = 0; i < 20; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function currentDomain() {
  const hostname = window.location.hostname;

  if (!hostname.match(ipRegex) && isValid(hostname)) {
    return parse(hostname).domain;
  }
  return hostname;
}

function createCookie() {
  document.cookie = COOKIE + '=' + generateID() + ';domain=' + currentDomain();
}

function getSession() {
  if (!getCookie()) {
    createCookie();
  }
  return getCookie();
}

export default { getSession };
