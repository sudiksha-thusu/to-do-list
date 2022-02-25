import React, { Component } from 'react';
import './App.css';


class App extends Component 
{
  constructor(props)
  {
    super(props);

    this.state=
    {
      newItem:"",
      list:[]
    };
  }

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

  deleteItem(id)
  { 
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  crossLine(id)
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
  

  render() {
    return (
      <div className="App">

        <div className="app-title">
        <h1>To Do List</h1>
        </div>
        <div className="container">

        <div
          style={{
            padding: 30,
            textAlign: "center",
            maxWidth: 500,
            margin: "auto"
          }}
        >
        <div className="add-task">
       <h2>Add a Task..</h2>
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
      <ul>
        {
          this.state.list.map(item => {
            return(
              <li key={item.id}>  {item.isDeleted===false?
                <span> 
                  {item.value} 
                  <button onClick={() => this.crossLine(item.id)}>
                Done
               </button>  </span>
              : <span style={{textDecoration:"line-through"}}> {item.value} </span>} 
              <button onClick={() => this.deleteItem(item.id)}>X</button>
             
              </li>
            )
          })
        }
      </ul>
      </div>
      </div>
      </div>
    );
  };
};


export default App;
