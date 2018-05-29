import React from 'react';
import TodoListItem from "./todo_list_item";

const TodoList = ({todos}) => {
  return(
    <ul>
      {todos.map( (todo) => <TodoListItem todo={todo} />)}
    </ul>);
  };

export default TodoList;
