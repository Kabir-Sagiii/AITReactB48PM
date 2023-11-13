import { useContext } from "react";
import D from "./D";
import mycontext from "./mycontext";

function C() {
  let mydata = useContext(mycontext);
  return (
    <div
      style={{ padding: "20px", boxShadow: "0 0 10px black", width: "300px" }}
    >
      <h2>C Component : {mydata}</h2>
      <D />
    </div>
  );
}

export default C;
