import { productListReducer } from "./productReducers";
import { combineReducers } from "redux";

export default combineReducers({
  productList: productListReducer,
});
