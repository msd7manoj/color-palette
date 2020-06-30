import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, JssProvider} from 'react-jss'
import './index.css';
/* Styles */
import './assets/scss/index.scss';
import './assets/css/appAnimate.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { globalTheme } from './styles/globalTheme';
import { Provider } from "react-redux";

import store from "./redux/appStore";

const generateId = (rule, sheet) => {
  let ms = new Date()
  return `palette-${rule.key}-${ms.getMilliseconds()}`
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={globalTheme}>
        <JssProvider generateId={generateId}>
          <App />
        </JssProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
