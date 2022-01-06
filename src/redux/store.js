import { createStore } from "redux";
import rootReducer from "./reducers";

const persistedState = localStorage.getItem('count') 
                       ? JSON.parse(localStorage.getItem('count'))
                       : {}

const store = createStore(rootReducer,persistedState);
store.subscribe(()=>{
    localStorage.setItem('count', JSON.stringify(store.getState()));
  })

export default store;