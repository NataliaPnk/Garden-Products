import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { loadAllProductsAction } from "../store/reducers/productsReducer";

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
  })
  }
};
