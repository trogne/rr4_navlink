//import { connect } from 'react-redux';
//import { setVisibilityFilter } from '../actions';
//import Link from './Link';
//
//const mapStateToProps = (state, ownProps) => ({
//    active: ownProps.filter === state.visibilityFilter,
//});
//
//const mapDispatchToProps = (dispatch, ownProps) => ({
//    onClick() {
//      dispatch(setVisibilityFilter(ownProps.filter));
//    }
//});
//
//const FilterLink = connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(Link);
//
//export default FilterLink;


////want the router to be in control of any state that is in the url

import React from 'react';
////import {Link} from 'react-router';
import {NavLink} from 'react-router-dom';

//    <Link to={filter === 'all' ? '' : filter}
//        activeStyle={{textDecoration: 'none', color: 'black', }}>
const FilterLink = ({ filter, children }) => {
    return (
        <NavLink
            exact
            to={filter === "all" ? "/" : `/${filter}`}
            activeStyle={{ textDecoration: "none", color: "red" }}
        >
            {children}
        </NavLink>
    );
};


export default FilterLink;
