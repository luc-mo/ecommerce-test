import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  CHANGE_ATTRIBUTE,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  SET_CURRENCIES,
  CHANGE_CURRENCY
} from './types';

// Cart
export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeProductFromCart = (id) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: { id },
});

export const removeAllProductsFromCart = () => ({
  type: REMOVE_ALL_PRODUCTS_FROM_CART,
});

export const changeAttribute = ({ id, name, value }) => ({
  type: CHANGE_ATTRIBUTE,
  payload: { id, name, value },
});

export const incrementCount = (id) => ({
  type: INCREMENT_COUNT,
  payload: { id },
});

export const decrementCount = (id) => ({
  type: DECREMENT_COUNT,
  payload: { id },
});


// Currencies
export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});

export const changeCurrency = (currencyIndex) => ({
  type: CHANGE_CURRENCY,
  payload: currencyIndex,
});