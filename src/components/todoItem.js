import React from 'react';
import './todoItem.css';


export default class TodoItem extends React.Component{
constructor(props){
    super(props);
    }

    removeTodo(id){
        this.props.removeTodo(id);
    }

    render(){
        return(
            <div className="todoLists">
                <button className="removeTodo" onClick={() => this.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text};
            </div>
        )
    }
}