import React from 'react';
import './todo.css';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addItem =  e =>{
        e.preventDefault();
        this.props.addItem(this.state.item)
        this.setState({
            item: ''
        })
    }


    render() {

        return (
            <div className="FormContainer">
                <form onSubmit={this.addItem}>
                    <input
                        value={this.state.item}
                        name="item"
                        onChange={this.handleChanges}
                        />
                    <button>Add</button>
                    
                </form>
                
            </div>
        )
    }
}

export default TodoForm