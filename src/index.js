import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/styles.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router';
import {createBrowserHistory} from "history";

const history = createBrowserHistory({basename: '/2019-2020/'});

ReactDOM.render(
  <Router history={history} >
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
