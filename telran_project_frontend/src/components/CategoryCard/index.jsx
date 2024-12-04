import React from "react";
import s from "../CategoryCard/index.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ id, image, title }) {
  return (
    <Link to={`/categories/${id}`} className={s.card}>
        <img src={image} alt={image.title} />
        <h3>{title} </h3>
    </Link>
  );
}
