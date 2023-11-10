const cityActionCreator = (data) => {
  return {
    type: "CITY",
    payload: data,
  };
};

export default cityActionCreator;
