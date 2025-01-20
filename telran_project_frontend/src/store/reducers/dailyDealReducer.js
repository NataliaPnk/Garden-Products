const defaultState = {
  state: {},
  product: null,
  status: "loading",
};

const LOAD_DAILY_DEAL = "LOAD_DAILY_DEAL";
const SET_DAILY_DEAL = "SET_DAILY_DEAL";

export const loadDailyDealAction = (product) => ({
  type: LOAD_DAILY_DEAL,
  payload: product,
});

export const setDiscountProduct = (product) => {
  return {
    type: SET_DAILY_DEAL,
    payload: product,
  };
};

export const dailyDealReducer = (state = defaultState, action) => {
  if (action.type === LOAD_DAILY_DEAL) {
    return {
      ...state,
      dailyDeal: { ...action.payload[0], count: 1 },
      status: "ready",
    };
  } else if (action.type === SET_DAILY_DEAL) {
    return {
      ...state,
      product: action.payload,
    };
  }
  return state;
};
