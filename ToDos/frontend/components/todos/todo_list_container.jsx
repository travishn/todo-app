import { connect }from 'react-redux';
import TodoList from "./todo_list";
// const TodoList = require('./todo_list');
import {RECEIVE_TODO, RECEIVE_TODOS, receiveTodo, receiveTodos} from "../../actions/todo_actions";

import {allTodos} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
