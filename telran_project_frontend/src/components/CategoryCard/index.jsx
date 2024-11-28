import React from "react";
import s from "../CategoryCard/index.module.css";

export default function CategoryCard({ id, image, title }) {
  return (
    <div className={s.card}>
      <img src={image} alt={image.title} />
      <h3>{title} </h3>
    </div>
  );
}
