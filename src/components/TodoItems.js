import React from 'react';
import './todo.css';

import ToDo from './Todo'

const TodoItems = props => {
    return(
        <div className="TodoItems-List">
            {props.todoItems.map(item => {
                return(
                    <ToDo
                    key={item.id}
                    toggleItem={props.toggleItem}
                    item={item}
                    />
                )
            })}
        </div>
    )
}

export default TodoItems