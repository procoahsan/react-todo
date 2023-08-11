import React,{useState} from "react";
import { Taskcard } from "./Taskcard";
export const Todo = () => {
  const [taskArray, setArray] = useState([])
  const [title , setTitle] = useState("")

  const addTodo = ()=>{
    let result = {}
    result["title"] = title
    result["completed"] = false
    let array = [...taskArray , result]
    setArray(array)

  }
  return (
    <div className="container-fluid bg-dark d-flex flex-column align-items-center justify-content-center vh-100 w-100 gap-4">
      <span className="text-white display-5">Todo list</span>
      <input placeholder="Enter the task" type="text" className="w-25 h5 px-3 rounded" style={{height:"50px"}} value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button className="rounded btn btn-success " style={{width:"150px" , height : "50px"}} onClick={addTodo}>Add todo</button>
      {
        taskArray.map((data)=>{
          return(
            <Taskcard title={data.title} completed = {data.completed} />
          )
        })
      }
      
    </div>
  );
};
