import React from 'react';
import './Todo.css';

class ToDo extends React.Component{
    render(){
        return (
            <div>
                <div className="todoItem">
                    <p><strong>To Do :</strong> {this.props.todoProps.toDoItem}</p>
                    <p><strong>To Complete by :</strong> {this.props.todoProps.dateToCompleteBy}</p>
                    {/* <p><strong>Completed? :</strong> {this.props.todoProps.completed}</p> */}
                </div>
            </div>
        )
    }
}

export default ToDo