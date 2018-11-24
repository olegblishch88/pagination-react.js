import React from 'react';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: ['z','x','v','m','b','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h'],
      currentPage: 1,
      todosPerPage: 3
    }
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick = (event) => {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

  render(){

    const {todos, currentPage, todosPerPage} = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>
    })

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++){
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return(
        <li
        key={number}
        id={number}
        onClick={this.handleClick}>
        {number}
        </li>
      );
    });

    return(
      <div>
        <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}
