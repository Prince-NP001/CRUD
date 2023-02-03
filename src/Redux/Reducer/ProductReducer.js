const productReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        items: state.items.filter((product) => product.id != action.payload)
      }
    default:
      return state;
  }
};

export default productReducer;
