import { useReducer } from "react";

// const myReducer = (state, action) => {
//   //state = "delhi"  state="raj"
//   if (action.type === "city") {
//     state = "Delhi";
//   } else {
//     state = "Raj";
//   }
//   return state;
// };

const myReducer = (state, action) => {
  if (action.type === "city") {
    state = {
      ...state,
      city: "Hyderabad",
    };
  } else {
    state = {
      ...state,
      name: "Sneha Reddy",
    };
  }
  return state;
};

function UseReducerComp() {
  let [state, dispatch] = useReducer(myReducer, {
    name: "Raj Verma",
    city: "Delhi",
  });

  return (
    <div className="mt-5 text-center">
      <h2>useReducer() hook Concept</h2>
      <h5 style={{ color: "red" }}>
        {state.name}------- {state.city}
      </h5>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          dispatch({ type: "city" });
        }}
      >
        Change City
      </button>
      <button
        className="btn btn-outline-secondary mx-2"
        onClick={() => {
          dispatch({ type: "name" });
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default UseReducerComp;
