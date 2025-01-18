const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
const SORT_ALL_PRODUCTS = 'SORT_ALL_PRODUCTS';
const FILTER_DISCOUNTED_PRODUCTS = 'FILTER_DISCOUNTED_PRODUCTS';

export const loadAllProductsAction = (products) => ({
  type: LOAD_ALL_PRODUCTS,
  payload: products,
});

export const filterByPriceAction = values => ({
  type: FILTER_BY_PRICE, payload: values
}); 

export const sortAllProductsAction = value => ({type: SORT_ALL_PRODUCTS, payload: value});

export const filterDiscountedProductsAction = value => ({type: FILTER_DISCOUNTED_PRODUCTS, payload: value});

export const productsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload.map(el => ({...el, visible: true}))
  }else if (action.type === FILTER_BY_PRICE) {
    const {minValue, maxValue} = action.payload;
    state.map(el => {
      el.visible = el.price >= minValue && el.price <= maxValue ? true : false;
      return el
    });
    return [...state]
  } else if(action.type === SORT_ALL_PRODUCTS){
    if (action.payload === 'default') {
      return state.slice().sort((a, b) => a.title.localeCompare(b.title));
    }else if (action.payload === 'price_asc') {
      return state.slice().sort((a, b) => a.price - b.price);
    } else if (action.payload === 'price_desc') {
      return state.slice().sort((a, b) => b.price - a.price);
    } 
  } else if (action.type === FILTER_DISCOUNTED_PRODUCTS) {
    if(action.payload){
      state.map(el => {
        if(el.discont_price === null){
          el.visible = false
        }
        return el
      })
    } else {
      state.map(el => {
        el.visible = true;
        return el
      })
    }
    return [...state]
  }   
  return state;
};

