import React from "react";
import { useSelector } from "react-redux";
import s from "../AllCategoriesPage/index.module.css";
import CategoryCard from "../../components/CategoryCard";
import { Link, useLocation } from "react-router-dom";

export default function AllCategoriesPage() {
  const categoriesState = useSelector((store) => store.categories);
  const location = useLocation();

  return (
    <section className={s.container}>
      <div className={s.navigation}>
        <Link to='/' className={location.pathname === '/' ? `${s.link} ${s.active}` : s.link}
        >Main Page</Link>
        <div></div>
        <Link to='/all_categories' className={location.pathname === '/all_categories' ? `${s.link} ${s.active}` : s.link}
        >All Categories</Link>
      </div>
      <h2>Categories</h2>
      <div className={s.wrapper}>
        {categoriesState.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
