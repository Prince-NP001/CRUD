import { createStore, combineReducers } from "redux";
import ProductReducer from "./Reducer/ProductReducer";

const mainReducer = combineReducers({
  product: ProductReducer,
});

const commonData = {
  product: {
    items: [
      {
        id: 1,
        name: "Chair",
        price: "1000",
        quantity: "10",
        date: "10/12/2002",
      },
      {
        id: 2,
        name: "Laptop",
        price: "60000",
        quantity: "2",
        date: "10/12/2002",
      },
    ],
  },
};

const store = createStore(mainReducer, commonData);
export default store;
