import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllCategories } from "./requests/categories";
import { getAllProducts } from "./requests/products";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(), []);
    dispatch(getAllCategories(), []);
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/all_categories" element={<AllCategoriesPage />} />
        <Route
          path="/categories/:category_name"
          element={<ProductsByCategoryPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
