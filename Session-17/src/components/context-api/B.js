import React from "react";
import C from "./C";

function B() {
  return (
    <div
      style={{ padding: "20px", boxShadow: "0 0 10px black", width: "400px" }}
    >
      <h2>B Component</h2>
      <C />
    </div>
  );
}

export default B;
