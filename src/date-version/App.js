import React, { Component } from 'react';
//import './App.css';
import ToDoList from './ToDoList';


class App extends Component 
{
  constructor(props)
  {
    super(props);

    this.state=
    {
      newItem:"",
      date: new Date(),
      list:[]
    };
  }

  // getDate() {
  //   var date = { currentTime: new Date().toLocaleString() };

  //   this.setState({
  //     date: date
  //   });
  // }

  updateInput(key, value)
  {
    //update react state 
    this.setState({
      [key]: value
    });
  }

  addItem()
  {
    //create item with unique id

    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice(),
      isDeleted:false
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }

  crossLine=(id) =>
  {
    this.setState(state => ({
      list: state.list.map(item => {
        if (item.id === id) {
          // suppose to update
          return {
            ...item,
            isDeleted: !item.isDeleted
          };
        } else {
          return item;
        }
      })
    }));
    
  };
  
  deleteItem=(id) =>
  { 
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App">

        <div className="app-title">
        <h1>To Do List</h1>
        </div>
        <div className="container">

        <div
          style={{
            padding: 20,
            textAlign: "center",
            maxWidth: 250,
            margin: "auto"
          }}
        >
        <div className="add-task">
       <h2>Add a Task..</h2>
       </div>

       <div className="italic">  
       <div class="date">
          <p> for date: {this.state.date.toLocaleDateString()} </p>
       </div> 
       </div> 
       
       <input
        type="text"
        placeholder="Type a task here.."
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}
       />

      
      <button
         onClick={() => this.addItem()}
      >
        Add
      </button>
    
      <br/>
      
      <ToDoList list = {this.state.list} crossLine={this.crossLine} deleteItem={this.deleteItem}/> 

      </div>
      </div>
      </div>
    );
  };
};


export default App;
