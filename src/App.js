import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import TodoInput from './components/todoinput.js';
import TodoItem from './components/todoItem.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ThingsToDo: [
                {id: 0, text: "Gym at 6PM"},
                {id: 1, text: "shopping"},
                {id: 2, text: "Be awesome"}
            ],
            nextId: 3
        }
        this.addToDo = this.addToDo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
        addToDo(todoText){
        let ThingsToDo = this.state.ThingsToDo.slice();
        ThingsToDo.push({id: this.state.nextId, text: todoText});
        this.setState({
            ThingsToDo: ThingsToDo,
            nextId: ++this.state.nextId
        });
        }
        removeTodo(id){
        this.setState({
           ThingsToDo: this.state.ThingsToDo.filter((ThingsToDo,index) => ThingsToDo.id !== id)
        });
        }

    render() {
    return (
      <div className="App">
        <div className={"todolist"}>
            <Header />
            <TodoInput todoText="" addToDo={this.addToDo} />
            <ul>
                {
                    this.state.ThingsToDo.map((todo) => {
                        return (<TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>)
                    })
                }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
