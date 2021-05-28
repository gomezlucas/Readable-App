import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers'
import middleware from './middleware'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'


// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// To debug
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

