import { useState, useRef } from "react";

function TaskRef() {
  let [state, setState] = useState("Raj Verma");
  let ref = useRef(12345); // ref = {current:12345}
  console.log("re-rendering");
  //   var name = "123456";
  return (
    <div className="mt-5">
      <h2>useRef() hook : {}</h2>
      <p style={{ fontSize: "20px" }}>State Concept :{state}</p>
      <button
        className="mt-2 btn btn-outline-warning"
        onClick={() => {
          //   name = "Rajesh Reddy";
          ref.current = "Rajesh Reddy";
        }}
      >
        Update Data
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        className="mt-2 btn btn-outline-danger"
        onClick={() => {
          setState("Sneha Sharma");
        }}
      >
        Update State
      </button>{" "}
      &nbsp;&nbsp;&nbsp;
      <button
        className="mt-2 btn btn-outline-primary"
        onClick={() => {
          //   console.log(name);
          console.log(ref.current);
        }}
      >
        Print Data
      </button>
    </div>
  );
}

export default TaskRef;
