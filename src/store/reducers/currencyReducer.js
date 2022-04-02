import {
  SET_CURRENCIES,
  CHANGE_CURRENCY
} from "store/actions";

const initialState = {
  currencies: [],
  selected: 0,
};

export function currencyReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case SET_CURRENCIES:
      return { ...state, currencies: payload };
    case CHANGE_CURRENCY:
      return { ...state, selected: payload };
    default:
      return state;
  }
}