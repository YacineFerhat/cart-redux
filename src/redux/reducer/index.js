import { REMOVE_ITEM_FROM_CART, ADD_ITEM_TO_CART } from "../types";
import { addItem, removeItem } from "../utils";

const INITIAL_STATE = {
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
