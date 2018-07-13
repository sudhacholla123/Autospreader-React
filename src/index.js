import React from 'react';
import ReactDOM from 'react-dom';
import DashApp from './dashApp';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCjyk5QOR7Dtc_X-zCwfqHF0ooxU6uAhSo",
  authDomain: "autospreader-qa.firebaseapp.com",
  databaseURL: "https://autospreader-qa.firebaseio.com",
  projectId: "autospreader-qa",
  storageBucket: "autospreader-qa.appspot.com",
  messagingSenderId: "182897259097"
};
firebase.initializeApp(config);

ReactDOM.render(<DashApp />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./dashApp.js', () => {
    const NextApp = require('./dashApp').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
