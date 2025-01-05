import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllCategories } from "./requests/categories";
import { getAllProducts } from "./requests/products";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductPage from "./pages/ProductPage";
import AllSalesPage from "./pages/AllSalesPage";
import CartPage from "./pages/CartPage";
import { Context } from "./context";
//import FeedbackWindow from "./components/FeedbackWindow";

function App() {
  const [feedbackActive, setFeedbackActive] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(), []);
    dispatch(getAllCategories(), []);
  });

  return (
    <div>
      <Context.Provider value={{ feedbackActive, setFeedbackActive }}>
        {/* <FeedbackWindow /> */}
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/all_categories" element={<AllCategoriesPage />} />
          <Route
            path="/categories/:category_name"
            element={<ProductsByCategoryPage />}
          />
          <Route path="/products/:product_id" element={<ProductPage />} />
          <Route path="/all_sales" element={<AllSalesPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
