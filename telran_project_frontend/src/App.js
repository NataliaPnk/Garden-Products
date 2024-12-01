import Footer from './components/Footer';
import Header from './components/Header';
import DiscountForm from './components/DiscountForm';
import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllCategories } from "./requests/categories";
import CategoriesContainer from "./components/CategoriesContainer";
import { getAllProducts } from "./requests/products";
import ProductsSaleContainer from "./components/ProductsSaleContainer";
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getAllProducts(), [])
  dispatch(getAllCategories(), [])
  })
            
  return (
    <div>
      <Header />
      <Home />
      <CategoriesContainer />
      <DiscountForm />
      <ProductsSaleContainer />
      <Footer/>
    </div>
  );
}

export default App;
