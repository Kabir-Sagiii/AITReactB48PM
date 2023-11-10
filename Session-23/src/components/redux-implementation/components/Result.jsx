import React from "react";
import { useSelector } from "react-redux";

function Result() {
  let data = useSelector((storedata) => {
    return storedata.textReducers;
  });
  return (
    <div>
      <h2>Result Component</h2>
      <p style={{ color: "green" }}>Name: {data.name}</p>
      <p style={{ color: "green" }}>City: {data.city}</p>
    </div>
  );
}

export default Result;
