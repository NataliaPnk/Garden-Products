import React from "react";
import s from "../ProductCard/index.module.css";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function ProductCard({
  id,
  image,
  title,
  price,
  discont_price,
}) {
  return (
    <div className={s.card}>
      <img src={`http://localhost:3333${image}`} />
      <div>
        <FiHeart />
        <HiOutlineShoppingBag />
      </div>

      <div>
        <p>{title}</p>
        <div>
          <p>${price}</p>
          <span>${discont_price}</span>
        </div>
      </div>
    </div>
  );
}
