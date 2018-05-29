import React from 'react';

import TodoListItem from "./todo_list_item";
// module.exports = () => <h3>todo list goes here</h3>;

// const TodoList = ({todos}) => {
//   return (
//     <ul>
//       todos.map( (todo) => <li>{todo.title}</li>)
//     </ul>
//   );
// };

const TodoList = ({todos}) => {
  // console.log();
  return(
    <ul>
      {todos.map( (todo) => <TodoListItem todo={todo} />)}
    </ul>);
  };

export default TodoList;
