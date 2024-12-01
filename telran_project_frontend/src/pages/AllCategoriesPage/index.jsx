import React from "react";
import { useSelector } from "react-redux";
import s from "../AllCategoriesPage/index.module.css";
import CategoryCard from "../../components/CategoryCard";

export default function AllCategoriesPage() {
  const categoriesState = useSelector((store) => store.categories);

  return (
    <section className={s.container}>
      <h2>Categories</h2>
      <div className={s.wrapper}>
        {categoriesState.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
