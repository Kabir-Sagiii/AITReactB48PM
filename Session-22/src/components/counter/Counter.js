import { useState } from "react";
import "./Counter.css";

function Counter() {
  let [state, setState] = useState(0);

  let [name, setName] = useState("Kabir");

  console.log("counter is called");
  // const increaseCount = () => {
  //   setState(state + 1); //asynchronous
  //   console.log(state); //0
  // };

  const increaseCount = () => {
    setState(state + 1); //asynchronous

    // setName("Sagar");
  };

  // const increaseCount = () => {
  //   setState((prevState) => prevState + 3); //0 + 3 = 3   // updater function

  //   setState((prevState) => prevState + 1); // 3 + 1 = 4

  //   setState((prevState) => prevState + 2); //4 + 2 = 6
  // };

  return (
    <div className="counterContainer">
      <h2>
        Count value is <span>{state}</span>
      </h2>
      <button onClick={increaseCount}>IncCount {name}</button>
    </div>
  );
}

export default Counter;
