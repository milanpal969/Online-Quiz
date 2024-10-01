import React, { useState } from 'react'


function Todos() {


    const [todos,settodos] = useState([]);
    const [input,setinput] =  useState('');

    const handleDelete = (index) => {
        const newtodos = todos.filter((todo,i) => i!==index);
        settodos(newtodos);

    }

    const handleEdit = (index,todo) => {
            setinput(todo);
            handleDelete(index);

    }

  return (
    <div>

    <input value={input} onChange={(e)=>{setinput(e.target.value)}}/>
    <button onClick={()=>{settodos([...todos,input]);
    setinput('');

    }}>add</button>
    
    <div>
        {
            todos.map((todo,index)=>(
                <div style={{display:"flex",gap:"10px"}}>
                <li key={index}>{todo}</li>
                <button onClick={()=>{handleDelete(index)}}>delete</button>
                <button onClick={()=>{handleEdit(index,todo)}}>edit</button>
                </div>
            ))
        }
    </div>

    </div>
  )
}

export default Todos