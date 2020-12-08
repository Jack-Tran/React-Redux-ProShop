import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userDetailsUpdateReducer,
} from "./userReducers";
import { orderCreateReducer, orderDetailsReducer } from "./orderReducers";

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userDetailsUpdate: userDetailsUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});
