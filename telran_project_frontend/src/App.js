import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllCategories } from "./requests/categories";
import CategoriesContainer from "./components/CategoriesContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCategories()), []);

  return (
    <div>
      <CategoriesContainer />
    </div>
  );
}

export default App;
