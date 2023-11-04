import React from "react";

function Text({ data }) {
  return (
    <div>
      <hr />
      <h2>Text Component</h2>
      <p style={{ color: "green", fontSize: "24px", fontStyle: "italic" }}>
        {data}
      </p>
    </div>
  );
}

export default Text;
