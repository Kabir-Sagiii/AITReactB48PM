import { useReducer } from "react";
import counterReducer from "./counterReducer";

function Counter() {
  let [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  });
  return (
    <div className="mt-5">
      <h2 className="my-4">Count Value is {state.count}</h2>
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 1 });
        }}
      >
        incCount by 1
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 1 });
        }}
      >
        decCount by 1
      </button>
      <button
        className="btn btn-warning mx-2"
        onClick={() => {
          dispatch({ type: "CLEAR" });
        }}
      >
        clear
      </button>
      <button
        className="btn btn-secondary mx-2"
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 5 });
        }}
      >
        IncCount by 5
      </button>
      <button
        className="btn btn-info mx-2"
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 3 });
        }}
      >
        DecCount by 3
      </button>
    </div>
  );
}

export default Counter;
