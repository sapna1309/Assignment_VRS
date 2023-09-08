import React from 'react'

const TodoItem = ({id,task,handleDelete}) => {
  return (
    <div style={{display:"flex",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",alignItems:"center",justifyContent:"space-between",padding:"0px 10px"}}>
      <h1>{task}</h1>
      <button style={{padding:"5px 15px",fontSize:"18px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}} 
      onClick={()=>handleDelete(id)} >Remove</button>
    </div>
  )
}

export default TodoItem