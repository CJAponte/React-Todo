import React from 'react';

import './App.css';

import {ListItems} from './components/data'

import TodoForm from "./components/TodoForm"
import TodoItems from "./components/TodoItems"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      ListItems
    }
  }

  toggleItem = id => {
    this.setState(prevState => {
      return{
        ListItems: prevState.ListItems.map(item =>{
          if(item.id === id){
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
      }
    })
  }

  removeItem = e => {
    e.preventDefault()
    this.setState({
      ListItems: this.state.ListItems.filter(item => item.completed === false)
    })
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState(prevState => {
      return {
        ListItems: [...prevState.ListItems, newItem]
      }
    })
  }

  render() {
    return(
      <div className="App">
        
        <div>
          <h1>My ToDo List</h1>
        </div>

        <TodoItems
        todoItems={this.state.ListItems}
        toggleItem={this.toggleItem}
        />

        <div>
          <TodoForm addItem={this.addItem} removeItems={this.removeItem}/>
        </div>
        <button className="RemoveItem-btn" onClick={this.removeItem}>Clear Completed</button>
      </div>

    )
  }
}

export default App;
