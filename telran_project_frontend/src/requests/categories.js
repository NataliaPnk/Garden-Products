import { loadAllCategoriesAction } from "../store/reducers/categoriesReducer";

export const getAllCategories = () => (dispatch) => {
  fetch("http://localhost:3333/categories/all")
    .then((res) => res.json())
    .then((json) => {
      // Transform the data to include the full image URL
      const transformedData = json.map((el) => ({
        ...el,
        image: `http://localhost:3333${el.image}`,
      }));
      dispatch(loadAllCategoriesAction(transformedData));
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
};
