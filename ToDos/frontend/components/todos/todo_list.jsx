import React from 'react';
import TodoListItem from "./todo_list_item";
import uniqId from '../../util/utils';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => {
  console.log(todos); //rn undef
  return(
    <div>
      <TodoForm id={uniqId()} receiveTodo={receiveTodo} />
      <ul>
        {todos.map( (todo) => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
    );
  };

export default TodoList;
// key={uniqId()}
