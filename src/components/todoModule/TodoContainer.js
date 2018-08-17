import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { completeTodoAction, addTodoAction, removeTodoAction } from './todoModule';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const todoText = document.getElementById('inputTodoText').value;
    if(todoText !== '') {
      this.props.addTodo({
        description: todoText,
        isCompleted: false
      });
      document.getElementById('inputTodoText').value = '';
    }
  }

  render() {
    const items = this.props.todoList.map((item, idx) =>
      <TodoItem key={idx}
        isCompleted={item.isCompleted}
        description={item.description}
        todoIdx={idx}
        completeTodo={this.props.completeTodo}
        removeTodo={this.props.removeTodo} />);
    return (
      <section id="todoContainer">
        <h1>{'TodoList'}</h1>
        <input id="inputTodoText" type="text" />
        <button onClick={this.addTodo}>{`Add Todo ${this.props.todoList.length + 1}`}</button>
        <ul className="todoList">
          {items}
        </ul>
      </section>
    );
  }
}

TodoContainer.propTypes = {
  todoList: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todoList: state.todoModule.todoList
});

const mapDispatchToProps = dispatch => ({
  addTodo: item => dispatch(addTodoAction(item)),
  completeTodo: todoIdx => dispatch(completeTodoAction(todoIdx)),
  removeTodo: todoIdx => dispatch(removeTodoAction(todoIdx))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
