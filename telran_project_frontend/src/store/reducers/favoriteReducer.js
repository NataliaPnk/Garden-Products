const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';

const FILTER_FAVORITE_PRODUCTS = "FILTER_FAVORITE_PRODUCTS";
const SORT_FAVORITE_PRODUCTS = "SORT_FAVORITE_PRODUCTS";

export const filterFavoriteProductsAction = (values) => ({
  type: FILTER_FAVORITE_PRODUCTS,
  payload: values,
});

export const sortFavoriteProductsAction = (value) => ({
  type: SORT_FAVORITE_PRODUCTS,
  payload: value,
});

export const addToFavoriteAction = product => ({
    type: ADD_TO_FAVORITE, 
    payload: product
});

const checkFavorite = (state, payload) => {

    const targetProduct = state.find(el => el.id === payload.id);

    if(targetProduct){
        return state.filter(el => el.id !== targetProduct.id)
    } else {
        return [...state, { ...payload, visible: true }];
    }
}
export const favoriteReducer = ( state = [], action) => {
    if(action.type === ADD_TO_FAVORITE){
        return checkFavorite(state, action.payload)
    }  if (action.type === FILTER_FAVORITE_PRODUCTS) {
        const { minValue, maxValue } = action.payload;
        return state.map((product) => {
          if (product.price >= minValue && product.price <= maxValue) {
            return { ...product, visible: true };
          } else {
            return { ...product, visible: false };
          }
        });
      } else if (action.type === SORT_FAVORITE_PRODUCTS) {
        if (action.payload === "default") {
          return state.slice().sort((a, b) => a.title.localeCompare(b.title));
        } else if (action.payload === "price_asc") {
          return state.slice().sort((a, b) => a.price - b.price);
        } else if (action.payload === "price_desc") {
          return state.slice().sort((a, b) => b.price - a.price);
        }
      }
    return state
}