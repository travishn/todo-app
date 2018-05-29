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
//
// window.newTodos = newTodos;
// console.log(window.store.getState()); // should return default state object
// console.log(window.store.dispatch(receiveTodo({ id: 3, title: 'ANOTHER TODO' })));
// console.log(window.store.getState()); // should include the newly added todo
// console.log(window.store.dispatch(receiveTodos(newTodos)));
// console.log(window.store.getState()); // should return only the new todos

document.addEventListener('DOMContentLoaded',()=>{
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;

  ReactDOM.render(<Root store={store}/>, rootEl);
});
