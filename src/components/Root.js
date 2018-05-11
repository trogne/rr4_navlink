import React from 'react'; //needs to import react to use the jsx syntax
import { Provider } from 'react-redux';
//import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // HashRouter
import App from './App';
import createHistory from 'history/createBrowserHistory'

//stateless functional component that just takes the store as a prop and returns an app inside the react redux provider

//<Router history={browserHistory}> //for react router 2
const Root = ({store}) => (
    <Provider store={store}>
        <Router history={createHistory()}>
            <Route path='/:filter?' component={App} />
        </Router>
    </Provider>
);
//Route path...   :  route handler component = App

// rr2 optional param: '/(:filter)'

export default Root;