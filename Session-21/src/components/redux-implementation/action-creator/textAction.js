const textActionCreator = (data) => {
  return {
    type: "TEXT",
    payload: data,
  };
};

export default textActionCreator;
