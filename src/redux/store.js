import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";

import Reducer from "./reducer";
const initialState = [];
const middleware = [thunk];

const reducers = combineReducers({
  cart: Reducer,
});

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);
