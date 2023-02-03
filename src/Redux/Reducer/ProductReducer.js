const productReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
