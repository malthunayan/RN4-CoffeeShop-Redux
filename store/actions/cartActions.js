import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./types";

export const addItemToCart = item => {
  item = { ...item, quantity: 1 };
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

export const checkoutCart = () => {
  return {
    type: CHECKOUT
  };
};
