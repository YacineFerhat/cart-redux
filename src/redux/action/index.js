import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../types";

export const addItem = (item) => (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        item,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const removeItem = (item) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});
