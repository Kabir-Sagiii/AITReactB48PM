const textReducer = (storedata = "No Data", action) => {
  if (action.type === "TEXT") {
    storedata = action.payload;
  }
  return storedata;
};

export default textReducer;
