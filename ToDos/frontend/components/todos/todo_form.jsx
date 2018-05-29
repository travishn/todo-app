import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: "",
      done: false,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }


  handleTitleChange(event){
    event.preventDefault();
    this.setState({
      title: event.target.value,

    });
  }
  handleBodyChange(event){
    event.preventDefault();
    this.setState({
      body: event.target.value
    });
  }

  submitTodo(event) {
    event.preventDefault();
    const { receiveTodo } = this.props;
    const { title, body, done} = this.state;
    const newTodo = {
      id: this.props.info,
      title,
      body,
      done
    };

    receiveTodo(newTodo);
    this.setState({
      title: '',
      body: "",
      done: false,
      id: null
    });
  }

  render(){
    //not sure if handleChange should be invoked???
    const { title, body } = this.state;
    return (
      <div>
        <input value = { title } placeholder= 'Enter something' onChange={this.handleTitleChange}></input>
        <input value = { body } placeholder= 'Enter something' onChange={this.handleBodyChange}></input>

        <button onClick={this.submitTodo}>Add new todo!</button>
      </div>
    );
  }
}

export default TodoForm;
