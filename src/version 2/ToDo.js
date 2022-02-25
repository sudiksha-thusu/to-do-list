import './App.css';
import React from 'react';
const ToDo = ({item,crossLine,deleteItem}) =>
{

          //this.state.list.map(item => {
            return(
              <li key={item.id}>  {item.isDeleted===false?
                <span> 
                  {item.value} 
                  <button onClick={() => crossLine(item.id)}>
                Done
                </button>  </span>
              : <span style={{textDecoration:"line-through"}}> {item.value} </span>} 
              <button onClick={() => deleteItem(item.id)}>X</button>
             
              </li>
            )
}


export default ToDo;
