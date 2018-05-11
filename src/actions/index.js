////traditional function declaration:
//curly braces to indicate the beginning of a block
//export function addTodo(text) {
//  return {
//    type: 'ADD_TODO',
//    id: (nextTodoId++).toString(),
//    text,
//  };
//}

//export const addTodo = (text) => {
//  return {
//    type: 'ADD_TODO',
//    id: (nextTodoId++).toString(),
//    text,
//  };
//};
//object expression rather than a block
//in parens so that parsers understand this as an object expression, and not a block
//console.log(JSON.parse(localStorage.getItem('state')).todos.length);
import { v4 } from 'node-uuid';
//let nextTodoId = 0; //in-memory counter
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    //id: (nextTodoId++).toString(),
    id: v4(),
    text,
});

//export const setVisibilityFilter = (filter) => ({
//    type: 'SET_VISIBILITY_FILTER',
//    filter,
//});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});
