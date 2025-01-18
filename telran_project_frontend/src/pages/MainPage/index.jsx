import React from "react";
import Home from "../../components/Home";
import CategoriesContainer from "../../components/CategoriesContainer";
import DiscountForm from "../../components/DiscountForm";
import ProductsSaleContainer from "../../components/ProductsSaleContainer";

export default function MainPage() {
  return (
    <div>
      <Home />
      <CategoriesContainer />
      <DiscountForm />
      <ProductsSaleContainer />
    </div>
  );
}
