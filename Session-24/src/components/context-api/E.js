import { useContext } from "react";
import mycontext from "./mycontext";

function E() {
  let data = useContext(mycontext);
  return (
    <div
      style={{ padding: "20px", boxShadow: "0 0 10px black", width: "200px" }}
    >
      <h2>E Component</h2>
      <p>Data: {data}</p>
    </div>
  );
}

export default E;
