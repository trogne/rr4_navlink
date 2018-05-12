import React from 'react'; //needs to import react to use the jsx syntax
import { Provider } from 'react-redux';
//import { Router, Route, browserHistory } from 'react-router';
//import { BrowserRouter as Router, Route } from 'react-router-dom'; // HashRouter
import { Route } from 'react-router-dom'; // HashRouter
import App from './App';
import createdHistory from 'history/createBrowserHistory'

//stateless functional component that just takes the store as a prop and returns an app inside the react redux provider

//const Root = ({store}) => (
//    <Provider store={store}>
//        <Router history={createdHistory()}>
//            <Route path='/:filter?' component={App} />
//        </Router>
//    </Provider>
//);
const Root = () => (
    <Route path='/:filter?' component={App} />
);

export default Root;

//stateless functional component that just takes the store as a prop and returns an app inside the react redux provider
//Route path... : route handler component = App
// rr2 optional param: '/(:filter)'

