import { createStore } from 'redux';

import { rootReducer } from './reducers';
import {
  addProductToCart,
  removeProductFromCart,
  removeAllProductsFromCart,
  changeAttribute,
  incrementCount,
  decrementCount,
  setCurrencies,
  changeCurrency
} from './actions';

const store = createStore(rootReducer);

export const mapStateToProps = (state) => ({
  cart: state.cart,
  currencies: state.currencies
});

export const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addProductToCart(product)),
  removeProductFromCart: (id) => dispatch(removeProductFromCart(id)),
  removeAllProductsFromCart: () => dispatch(removeAllProductsFromCart()),
  changeAttribute: ({ id, name, value }) => dispatch(changeAttribute({ id, name, value })),
  incrementCount: (id) => dispatch(incrementCount(id)),
  decrementCount: (id) => dispatch(decrementCount(id)),
  setCurrencies: (currencies) => dispatch(setCurrencies(currencies)),
  changeCurrency: (currencyIndex) => dispatch(changeCurrency(currencyIndex))
});

export default store;