import Model from './Model.mjs';
import Controller from './Controller.mjs';

const initializeApp = function initializeApp(document) {
  const appDiv = document.querySelector('#app-twidder');
  const controller = new Controller(appDiv, new Model());
};

export default initializeApp;
