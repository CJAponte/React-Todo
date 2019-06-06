import React from 'react';
import './todo.css';


const ToDo = props => {
    return(
        <div 
        className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
            <p><strong>To Do: </strong></p><p>{props.item.name}</p>
        </div>
    )
}

export default ToDo