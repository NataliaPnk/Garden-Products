import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import s from '../ProductsContainer/index.module.css'

export default function ProductsContainer() {
  const allProductsState = useSelector((store) => store.products);

  return (
    <div className={s.container}>
      {allProductsState.map((el) => (
        <ProductCard key={el.id} {...el} />
      ))}
    </div>
  );
}
