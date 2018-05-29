import { receiveTodos, receiveTodo, RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

import merge from "lodash/merge";

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODO:
      const id = action.todo.id;
      const newObject = {id: action.todo};
      return merge({}, state, newObject);

      // const found = state.id;
      // if(found == null){
      //   let newState = merge(state, {id: action.todo});
      //   return newState;
      // } else {
      //   let newState = merge(state,{}); //dup
      //   newState.id = action.todo;
      //   return newState;
      // }

    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};


export default todosReducer;
