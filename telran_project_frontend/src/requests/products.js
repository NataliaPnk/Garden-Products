import { loadAllProductsAction } from "../store/reducers/productsReducer";

export const getAllProducts = () => (dispatch) => {
  fetch("http://localhost:3333/products/all")
    .then((res) => res.json())
    .then((json) => {
      // Transform the data to include the full image URL
      const transformedData = json.map((el) => ({
        ...el,
        image: `http://localhost:3333${el.image}`,
      }));
      dispatch(loadAllProductsAction(transformedData));
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
