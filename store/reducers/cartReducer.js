import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      if (
        !!state.items.find(
          item => item.drink === payload.drink && item.option === payload.option
        )
      ) {
        state.items.find(
          item => item.drink === payload.drink && item.option === payload.option
        ).quantity += 1;
        return {
          ...state,
          items: [...state.items]
        };
      }
      return {
        ...state,
        items: state.items.concat(payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== payload)
      };
    case CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
