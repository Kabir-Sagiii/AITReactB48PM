import { useState } from "react";

function UpdateState() {
  let [state, setState] = useState({ name: "Kabir", city: "Delhi" }); //state = {name:"Kabir"}

  function updateName() {
    setState({ ...state, name: "Sagar" });
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>My Name is {state.name}</h2>
      <p>My city is {state.city}</p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default UpdateState;
