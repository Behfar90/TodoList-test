import React from 'react';
import './TodoInput.css';

export default class TodoInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    addToDo(todo){
        if (todo.length > 0) {
            this.props.addToDo(todo);
            this.setState({value:''})
        }
        else {
            alert("The input text is empty")
        }
    }



    render() {
        return(
          <div>
              <input type="text" placeholder="Enter task here..." value={this.state.value} onChange={this.handleChange} />
              <button type="button" className="btn btn-primary" onClick={() => this.addToDo(this.state.value)}>Submit</button>
          </div>
        );
    }
}
