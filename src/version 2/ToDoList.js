import React from 'react';
import ToDo from './ToDo';

const ToDoList=({list,crossLine,deleteItem})=>
{
    return(
    <div>{
        list.map(item =>{
                return(
                    <ul>
                    <ToDo item={item} crossLine={crossLine} deleteItem={deleteItem}/>
                    </ul>
                );
            })
          
        }
       
    </div>
    );
}
export default ToDoList;
