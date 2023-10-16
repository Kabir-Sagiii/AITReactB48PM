import { useState } from "react";
import "./Counter.css";

function Counter() {
  let [state, setState] = useState(999);

  //   var countValue = 0;

  //   const increaseCount = () => {
  //     var spanRef = document.querySelector("span");
  //     console.log(spanRef);
  //     spanRef.innerText = "1";
  //   };

  const increaseCount = () => {
    // state = state + 1;
    // console.log(state);
    // setState("Kabir");
    setState(state + 1);
  };

  return (
    <div className="counterContainer">
      <h2>
        Count value is <span>{state}</span>
      </h2>
      <button onClick={increaseCount}>IncCount {state}</button>
    </div>
  );
}

export default Counter;
