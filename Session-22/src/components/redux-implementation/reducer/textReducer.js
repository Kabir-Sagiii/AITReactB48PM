const textReducer = (storedata = { name: "", city: "" }, action) => {
  if (action.type === "TEXT") {
    storedata = {
      ...storedata,
      name: action.payload,
    };
  } else if (action.type === "CITY") {
    storedata = {
      ...storedata,
      city: action.payload,
    };
  }
  return storedata;
};

export default textReducer;
