const productReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_PRODUCT":

      return {
        ...state,
        items: [state.items.data, action.payload],
      };

    case 'DELETE_PRODUCT':

      return {
        ...state,
        items: state.items.data.filter((product) => product.id !== action.payload)
      }

    case 'INFO_PRODUCT':
      let productDetail = state.items.data.filter((product) => product.id === action.payload)
      return {
        ...state,
        items: (productDetail.length > 0 ? productDetail[0] : {})
      }

    case 'UPDATE_PRODUCT':
      const index = state.items.data.findIndex(el => el.id === action.payload.id);
      state.items.data[index].name = action.payload.name;
      state.items.data[index].price = action.payload.price;
      state.items.data[index].quantity = action.payload.quantity;
      state.items.data[index].date = action.payload.date;

      return state;

    case 'DB_PRODUCT':
      return {
        ...state,
        items: action.payload
      }

    default:
      return state;
  }
};

export default productReducer;
