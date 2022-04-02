import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  CHANGE_ATTRIBUTE,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from 'store/actions';

const initialState = {}

export function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_PRODUCT_TO_CART: {
      const { id, selectedAttributes } = payload;
      const count = state[id]?.count + 1 || 1;
      return {
        ...state,
        [id]: {
          ...payload,
          count,
          selectedAttributes
        }
      }
    }
    case CHANGE_ATTRIBUTE: {
      const { id, name, value } = payload;
      const { selectedAttributes } = state[id];
      return {
        ...state,
        [id]: {
          ...state[id],
          selectedAttributes: {
            ...selectedAttributes,
            [name]: value,
          }
        }
      }
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const { id } = payload;
      const { [id]: removed, ...rest } = state;
      return rest;
    }
    case REMOVE_ALL_PRODUCTS_FROM_CART:
      return {};
    case INCREMENT_COUNT: {
      const { id } = payload;
      const product = state[id];
      const count = product.count + 1;
      return { ...state, [id]: { ...product, count }};
    }
    case DECREMENT_COUNT: {
      const { id } = payload;
      const product = state[id];
      const count = (product.count - 1) || 1;
      return { ...state, [id]: { ...product, count }};
    }
    default:
      return state;
  }
}