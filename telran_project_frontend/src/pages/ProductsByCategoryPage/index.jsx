import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../requests/products";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import s from "../ProductsByCategoryPage/index.module.css";

export default function ProductsByCategoryPage() {
  const dispatch = useDispatch();
  const { category_name } = useParams();

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );

  useEffect(() => {
    dispatch(getProductsByCategory(category_name));
  }, []);
  //console.log(productsByCategoryState);

  const name = productsByCategoryState.category || {};
  const products = productsByCategoryState.data || [];

  return (
    <section>
      <h2 style={{ marginBottom: "40px" }}>{name.title}</h2>
      <div className={s.container}>
        {products.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
