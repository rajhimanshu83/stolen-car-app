import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer, initialState } from "./store/reducer";
import App from './containers/App';
import { ToastProvider } from 'react-toast-notifications'
// import { composeWithDevTools } from 'redux-devtools-extension';

import "./scss/App.scss";

declare global {
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const middleware = [thunk];
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
);

render( 
<Provider store={store}>
    <Router>
    <ToastProvider>
        <App />
    </ToastProvider>

    </Router>
</Provider>,
document.getElementById("root"));