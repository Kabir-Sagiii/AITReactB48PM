import { useState } from "react";

function Input({ updateParent }) {
  let [state, setState] = useState("");
  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        onClick={() => {
          updateParent(state);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
