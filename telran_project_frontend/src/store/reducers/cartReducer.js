const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const INCR_CART = "INCR_CART";
const DECR_CART = "DECR_CART";
const CLEAR_ALL_CART = "CLEAR_ALL_CART";

export const addToCartAction = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteFromCartAction = (product_id) => ({
  type: DELETE_FROM_CART,
  payload: product_id,
});

export const incrCartAction = (product_id) => ({
  type: INCR_CART,
  payload: product_id,
});

export const decrCartAction = (product_id) => ({
  type: DECR_CART,
  payload: product_id,
});

export const clearAllFromCartAction = () => ({
  type: CLEAR_ALL_CART,
});

const checkProduct = (state, payload) => {
  const targetProduct = state.find((el) => el.id === payload.id);

  if (targetProduct) {
    if (!payload.count) {
      targetProduct.count++;
      return [...state];
    } else {
      targetProduct.count += payload.count;
      return [...state];
    }
  } else {
    if (!payload.count) {
      return [
        ...state,
        { ...payload, count: 1, discountPrice: payload.discountPrice },
      ];
    } else {
      return [...state, payload];
    }
  }
};

export const cartReducer = (state = [], action) => {
  console.log("cartReducer called with action:", action);
  if (action.type === ADD_TO_CART) {
    return checkProduct(state, action.payload);
  } else if (action.type === DELETE_FROM_CART) {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === INCR_CART) {
    const targetProduct = state.find((el) => el.id === action.payload);
    targetProduct.count++;
    return [...state];
  } else if (action.type === DECR_CART) {
    const targetProduct = state.find((el) => el.id === action.payload);
    if (targetProduct.count === 1) {
      return state.filter((el) => el.id !== action.payload);
    } else {
      targetProduct.count--;
      return [...state];
    }
  } else if (action.type === CLEAR_ALL_CART) {
    return [];
  }

  return state;
};
