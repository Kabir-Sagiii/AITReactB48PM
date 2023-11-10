import { useState } from "react";
import textActionCreator from "../action-creator/textAction";
import myStore from "../redux/Store";

function Input() {
  let [inputData, setInputData] = useState("");

  const sendData = () => {
    // let action = textActionCreator(inputData);
    // myStore.dispatch(action);

    myStore.dispatch(textActionCreator(inputData));
  };

  return (
    <div className="mt-5 mx-auto w-25">
      <h4>Name Component</h4>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Enter Name"
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button className="btn btn-outline-primary mt-4" onClick={sendData}>
        Add Name
      </button>
    </div>
  );
}

export default Input;
