import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.filter);
  return {
    todos: getVisibleTodos(
        state.todos,
        ownProps.filter
    ),
  };
};
        //state.visibilityFilter


//const mapDispatchToProps = (dispatch) => {
//  return {
//    onTodoClick: (id) => {
//      dispatch(toggleTodo(id));
//    },
//  };
//};

    //onTodoClick: (id) => {  ////concise method notation (ES6), available when function defined inside an object
const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    },
});


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
