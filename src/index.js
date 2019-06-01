import Session from './sessions/sessions.js';

function init(options) {
  return new Session(options);
}

export {init};
