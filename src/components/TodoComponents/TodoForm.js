import React from 'react';
import './Todo.css';

import { todoData } from '../data'
import ToDo from './Todo'

class todoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            todoData: todoData,
            todoItem: '',
            // dateToCompleteBy: '',
            // completed: "",
            
        }
    }


addTodoItem = e =>{
    e.preventDefault();
    const newItemToDo = {
        todoItem: this.state.todoItem,
        // dateToCompleteBy: this.state.dateToCompleteBy,
        // completed: this.state.completed
    };
    this.setState({
        todoData: [...this.state.todoData, newItemToDo],
        todoItem: '',
        // dateToCompleteBy: '',
        // completed: ''
    });
};

formChange = event =>{
    this.setState({
        todoItem: event.target.value
    })
};

render() {
    console.log(this.state.todoItem)
    return(
        <div className="ToDoList">
            <h1 className="todoHeader">To Do List:</h1>

            <div className="Todo-List">
                {this.state.todoData.map(todoFromMap =>(
                    <ToDo todoProps={todoFromMap} />
                ))}
            </div>

            <form onSubmit={this.addTodoItem}>
                <input
                    className="inputToDo"
                    placeholder="What needs to be done?"
                    onChange={this.formChange}
                    value={this.state.todoItem}
                    name="todoitem"
                />
                
                {/* <input 
                    className="inputCompleteBy"
                    placeholder="By when?"
                    onChange={this.formChange}
                    value={this.state.dateToCompleteBy}
                    name="datetocompleteby"
                /> */}
                {/* 
                <input 
                    className="inputCompleted"
                    placeholder="Completed?"
                    onChange={this.formChange}
                    value={this.state.completed}
                    name="completed"
                /> */}

                <button>Add</button>
            </form>


        </div>
    )
}
}

export default todoForm