import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);





// deal with requests sequence
/**
 * POST request
 * 1 go to the api and make the requset
 * 2 go the the actions and make a new action
 * 3 go to the file and make a dispatch action and put the useState as the req body
 * 4 go to the reducer
 */

