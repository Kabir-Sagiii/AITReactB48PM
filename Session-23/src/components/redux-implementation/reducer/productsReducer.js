let initialProducts = {
  products: [],
};

const productsReducer = (state = initialProducts, action) => {
  if (action.type === "PRODUCTS") {
    state = {
      products: action.payload,
    };
  }
  return state;
};

export default productsReducer;
