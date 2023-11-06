import { useState } from "react";
import Text from "./Text";

function Input() {
  let [state, setState] = useState();
  let [data, setData] = useState();
  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setData(state);
        }}
      >
        Submit
      </button>
      <Text data={data} />
    </div>
  );
}

export default Input;
