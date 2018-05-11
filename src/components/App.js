import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

//const App = ({ params }) => (
let App = ({ match: { params } }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'all'} />
      <Footer />
    </div>
  )
}
    
App = withRouter(App);
export default App;
