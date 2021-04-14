import React from 'react';
import {render} from 'react-dom';

let id = 0;

const Todo = props => (
    <li>
      <input onChange={props.onToggle} type ="checkbox" checked={props.todo.checked} />
      <button onClick={props.onDelete}>delete</button>
      <span>{props.todo.text}</span>
    </li>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }


  addTodo(){
    const text = prompt("write Todo text")
    this.setState({
      // eslint-disable-next-line no-undef
      todos: [...this.state.todos, {id: id++, text: text, checked: False}],
    })
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id != id)
    })
  }

  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id !== id) return todo
        return{
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }
      })
    })
  }

  render(){
    return (
        <div>
          <button onClick={() => this.addTodo()}>Add Todo</button>
          <ul>
            {this.state.todos.map(todo => (
                <Todo onToggle={() => this.toggleTodo(todo.id)} onDelete={() => this.removeTodo(todo.id)} todo={todo} />
            ))}
          </ul>
        </div>
    )
  }
}


export default App;
