import { useState } from "react";
import Input from "./Input";

function Text() {
  let [textData, setTextData] = useState("------");

  const updateTextData = (data) => {
    setTextData(data);
  };

  return (
    <div>
      <h2>Text Component</h2>
      <p style={{ color: "green", fontSize: "24px", fontStyle: "italic" }}>
        {textData}
      </p>

      <br />
      <hr />
      <br />

      <Input updateParent={updateTextData} />
    </div>
  );
}

export default Text;
