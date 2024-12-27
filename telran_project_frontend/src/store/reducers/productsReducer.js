const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";

export const loadAllProductsAction = (products) => ({
  type: LOAD_ALL_PRODUCTS,
  payload: products,
});

export const productsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload;
  }
  return state;
};



const LOAD_PRODUCT = "LOAD_PRODUCT";

export const loadProductAction = (product) => ({
  type: LOAD_PRODUCT,
  payload: product,
});

export const productReducer = (state = [], action) => {
  if (action.type === LOAD_PRODUCT) {
    return action.payload;
  }
  return state;
};

