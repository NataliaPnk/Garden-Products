import { useEffect } from "react";
import "./App.css";
import ProductsSaleContainer from "./components/ProductsSaleContainer";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./requests/products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts()), []);

  return (
    <div>
      <ProductsSaleContainer />
    </div>
  );
}

export default App;
