import React from "react";
import s from "../CategoriesContainer/index.module.css";
import { useSelector } from "react-redux";
import CategoryCard from "../CategoryCard";
import { Link } from "react-router-dom";

export default function CategoriesContainer() {
  const categoriesState = useSelector((store) => store.categories).filter(
    (el, i) => i <= 3
  );

  return (
    <section className={s.container}>
      <div>
        <h2>Categories</h2>
        <div></div>
        <Link to='/all_categories'>All categories</Link>
      </div>

      <div>
        {categoriesState.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
