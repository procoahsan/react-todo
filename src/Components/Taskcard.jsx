import React from "react";
export const Taskcard = ({id,title,completed , update}) => {
  return (
    <div
      className="bg-white container  d-flex flex-row justify-content-between align-items-center px-2 rounded"
      style={{ height: "50px", width: "450px" }}
    >
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          checked={completed} // Use 'checked' instead of 'value' for checkbox state
          id={`flexCheckChecked-${id}`}
          onChange={()=>update(id)}
        />
        <label class="form-check-label" for="flexCheckChecked">
          {title}
        </label>
      </div>
      <button className="rounded btn btn-danger align-items-center justify-content-center py-2 " style={{width:"100px" , height : "50px"}}> <span>delete</span></button>
    </div>
  );
};
