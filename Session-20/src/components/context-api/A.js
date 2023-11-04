import { useState } from "react";
import B from "./B";
import mycontext from "./mycontext";

function A() {
  let [state, setState] = useState("");
  let [info, setInfo] = useState("-------------");
  return (
    <div
      style={{ padding: "20px", boxShadow: "0 0 10px black", width: "500px" }}
    >
      <h2>A Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setInfo(state);
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <mycontext.Provider value={info}>
        <B />
      </mycontext.Provider>
    </div>
  );
}

export default A;
