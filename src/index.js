import 'babel-polyfill';
import React,  {Component} from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';
import createdHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
//import { Router, Route, browserHistory } from 'react-router';
//import { BrowserRouter as Router, Route } from 'react-router-dom'; // HashRouter
import { BrowserRouter as Router } from 'react-router-dom'; // HashRouter
//import App from './App';

////import createHistory from 'history/createBrowserHistory'
////<Router history={createdHistory()}>

const store = configureStore();

//render(
//    <Root store={store} />,
//    document.getElementById('rozot')
//);
render(
    <Provider store={store}>
        <Router>
            <Root store={store}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
