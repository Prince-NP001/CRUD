import { createStore, combineReducers } from "redux";
import ProductReducer from "./Reducer/ProductReducer";
import axios from "axios";
import { composeWithDevTools } from 'redux-devtools-extension'



const mainReducer = combineReducers({
  product: ProductReducer,
});

const commonData = {
  product: {
    items: [
    ],
  },
};

const store = createStore(mainReducer, commonData, composeWithDevTools());
export default store;
