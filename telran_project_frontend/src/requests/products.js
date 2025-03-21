import { loadDailyDealAction } from "../store/reducers/dailyDealReducer";
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { loadAllProductsAction } from "../store/reducers/productsReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";

export const getAllProducts = () => (dispatch) => {
  fetch("http://localhost:3333/products/all")
    .then((res) => res.json())
    .then((json) => {
      dispatch(loadAllProductsAction(json));
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};

export const getProductsByCategory = (category_name) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/categories/${category_name}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadProductsByCategoryAction(json)))
      .catch((error) => {
        console.error("Error fetching productsByCategory:", error);
      });
  };
};

export const getSingleProduct = (product_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/${product_id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadSingleProductAction(json)))
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };
};

export const getDailyDeal = () => {
  return (dispatch) => {
    fetch(`http://localhost:3333/random_product`)
      .then((res) => res.json())
      .then((json) => dispatch(loadDailyDealAction(json)))
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };
};