import { getProduct } from "../../requests/products";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "../AllCategoriesPage/index.module.css";
import CategoryCard from "../../components/CategoryCard";
import Product from "../../components/Product";

export default function ProductPage() {
  const categoriesState = useSelector((store) => store.categories);

  const dispatch = useDispatch();
  const { product_id } = useParams();

  const productState = useSelector(
    (store) => store.product
  );

  useEffect(() => {dispatch(getProduct(product_id))}, []);
  console.log(productState);

  const product = productState || [];

  return (
    <section className={s.container}>
      <h2>Products</h2>
      
      <div className={s.wrapper}>
        {product.map((el) => (
          <Product key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
