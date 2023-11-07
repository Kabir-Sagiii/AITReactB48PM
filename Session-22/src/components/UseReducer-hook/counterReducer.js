const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = {
        count: state.count + action.payload,
      };
      break;

    case "DECREMENT":
      state = {
        count: state.count - action.payload,
      };
      break;
    case "CLEAR":
      state = {
        count: 0,
      };
      break;
  }

  return state;
};

export default counterReducer;
