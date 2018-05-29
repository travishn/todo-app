import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: "",
      done: false,
    };

    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handleBodyChange = this.handleBodyChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  handleChange(field){
    return (event) => {
      this.setState({
        [field]: event.target.value,
      });
    };
  }


  // handleTitleChange(event){
  //   event.preventDefault();
  //   this.setState({
  //     title: event.target.value,
  //
  //   });
  // }
  //
  // handleBodyChange(event){
  //   event.preventDefault();
  //   this.setState({
  //     body: event.target.value
  //   });
  // }

  submitTodo(event) {
    event.preventDefault();
    const { receiveTodo, id } = this.props;
    const { title, body, done} = this.state;
    const newTodo = {
      id,
      title,
      body,
      done
    };

    receiveTodo(newTodo); //.then
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
        <input value = { title } placeholder= 'Enter something' onChange={this.handleChange("title")} />
        <textarea value = { body } onChange={this.handleChange("body")} ></textarea>

        <button onClick={this.submitTodo}>Add new todo!</button>
      </div>
    );
  }
}

export default TodoForm;
