import countReducer from "./AddToCart/CountReducer";
import { combineReducers } from "redux";
import CartReducer from "./Cartpage/CartReducer";

export default combineReducers({
  countReducer,
  CartReducer
})