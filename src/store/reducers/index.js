import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { currencyReducer } from './currencyReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  currencies: currencyReducer,
});