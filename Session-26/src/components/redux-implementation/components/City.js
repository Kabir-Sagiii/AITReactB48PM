import { useState } from "react";
import cityActionCreator from "../action-creator/cityAction";
import { useDispatch } from "react-redux";

function City() {
  let [city, setCity] = useState("");
  let dispatch = useDispatch();

  const addCity = () => {
    var cityAction = cityActionCreator(city);
    dispatch(cityAction);
  };
  return (
    <div className="mt-5 mx-auto w-25">
      <h4>City Component</h4>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Enter City"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button className="btn btn-outline-success mt-4" onClick={addCity}>
        Add City
      </button>
    </div>
  );
}

export default City;
