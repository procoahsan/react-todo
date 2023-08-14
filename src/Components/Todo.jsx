import React,{useState} from "react";
import { Taskcard } from "./Taskcard";
export const Todo = () => {
  const [taskArray, setArray] = useState([])
  const [title , setTitle] = useState("")

  const addTodo = () => {
    let result = {};
    if (taskArray.length === 0) {
      result['id'] = 1;
    } else {
      const lastId = taskArray[taskArray.length - 1].id;
      result['id'] = lastId + 1;
    }
    result["title"] = title; // Make sure 'title' is defined somewhere
    result["completed"] = false;
  
    let array = [...taskArray, result];
    setArray(array); // Assuming setArray is a function to update the taskArray
    // console.log(taskArray)
  };
  const viewArray = ()=>{
    console.log(taskArray)
  }
  const updateFunction = (id) =>{
    const updatedArray = taskArray.map((data) => {
      if (data.id === id) {
        return { ...data, completed: true };
      }
      return data;
    });
    setArray(updatedArray);
  }
  
  return (
    <div className="container-fluid bg-dark d-flex flex-column align-items-center justify-content-center vh-100 w-100 gap-4">
    <div className="row">
      <div className="col-md-8 col-sm-10 col-xs-12 mx-auto">
        <span className="text-white display-5">Todo list</span>
        <input
          placeholder="Enter the task"
          type="text"
          className="w-100 h5 px-3 rounded"
          style={{ height: "50px" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="rounded btn btn-success my-2"
          style={{ width: "100%", height: "50px" }}
          onClick={addTodo}
        >
          Add todo
        </button>
        <button
          className="rounded btn btn-success my-2"
          style={{ width: "100%", height: "50px" }}
          onClick={viewArray}
        >
          View Array
        </button>
        {taskArray.map((data) => (
          <Taskcard
            key={data.id}
            id={data.id}
            title={data.title}
            completed={data.completed}
            update={updateFunction}
          />
        ))}
      </div>
    </div>
  </div>
  );
};
