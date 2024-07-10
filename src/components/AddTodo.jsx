import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

function AddTodo() {

    const [input ,setInput]=useState('')
    const dispatch=useDispatch()

  const addTodoHandler=(e)=>{
      e.preventDefault()
      dispatch(addTodo(input)) // indisplatch reducer key  always call 
      setInput('')

    }



  return (
   
<form onSubmit={addTodoHandler}
 className="space-x-0 mt-12">


      <input type="text" className="bg-slate-600 px-10 py-2 rounded-l-lg  text-white " 
      placeholder=" Write Todo "
      
      
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      
      />
       
        <button className="bg-blue-700 rounded-r-lg text-white px-5 py-2  ">Add</button>

</form> 
  )
}

export default AddTodo