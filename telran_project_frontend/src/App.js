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
import AllSalesPage from "./pages/AllSalesPage";
import CartPage from "./pages/CartPage";
import FavoriteProductsPage from "./pages/FavoriteProductsPage";
import { Context } from "./context";
import SingleProductPage from "./pages/SingleProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import AllProductsPage from "./pages/AllProductsPage";
import FeedbackWindow from "./components/FeedbackWindow";
import DailyDealPopup from "./components/DailyDealPopup";

function App() {
  const [feedbackActive, setFeedbackActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(), []);
    dispatch(getAllCategories(), []);
  });

  return (
    <div>
      <Context.Provider
        value={{ feedbackActive, setFeedbackActive, showPopup, setShowPopup }}
      >
        <FeedbackWindow />
        <DailyDealPopup />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/all_categories" element={<AllCategoriesPage />} />
          <Route
            path="/categories/:category_name"
            element={<ProductsByCategoryPage />}
          />
          <Route path="/products/:product_id" element={<SingleProductPage />} />
          <Route path="/all_sales" element={<AllSalesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorite_products" element={<FavoriteProductsPage />} />
          <Route path="/all_products" element={<AllProductsPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
