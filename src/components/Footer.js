import React from 'react';
import FilterLink from './FilterLink';
//import {Link} from 'react-router';
//import {NavLink} from 'react-router-dom';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="all">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="active">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="completed">
      Completed
    </FilterLink>
  </p>
);

//const Footer = () => (
//    <FilterLink />
//);

////I use NavLink directly in the footer:

//rr2 : Link UPDATES the state, but rr4 navlink IS NOT 
//const Footer = () => (
//    <p>
//        Show:
//        {" "}        
//        <NavLink
//            exact
//            to='/'
//            activeStyle={{
//                textDecoration: 'none',
//                color: 'black',
//            }}
//        >
//            All
//        </NavLink>
//        {", "}
//        <NavLink
//            exact
//            to='/active'
//            activeStyle={{
//                textDecoration: 'none',
//                color: 'black',
//            }}
//        >
//            Active
//        </NavLink>
//        {", "}
//        <NavLink
//            exact
//            to='/completed'
//            activeStyle={{
//                textDecoration: 'none',
//                color: 'black',
//            }}
//        >
//            Completed
//        </NavLink>        
//    </p>
//);

export default Footer;
