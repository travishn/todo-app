import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import merge from 'lodash/merge';
import { receiveTodos, receiveTodo, RECEIVE_TODO, RECEIVE_TODOS } from './actions/todo_actions';
import Root from './components/root';
import {allTodos} from "./reducers/selectors";
// lodash merge test: overwrite functionality
//{b:2, c:3};
// const objB = {a:3};
// console.log(merge(objA, objB));

// const _store = configureStore();
// window.store = _store;
//

// const newTodos = ()=>({
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// });

document.addEventListener('DOMContentLoaded',()=>{
  const rootEl = document.getElementById("content");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;

  ReactDOM.render(<Root store={store}/>, rootEl);
});
