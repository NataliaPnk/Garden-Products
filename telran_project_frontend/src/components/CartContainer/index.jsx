import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import s from '../CartContainer/index.module.css'

export default function CartContainer() {
  const cartState = useSelector((store) => store.cart);

  return (
    <div className={s.container}>
      {cartState.map((el) => (
        <CartItem key={el.id} {...el} />
      ))}
    </div>
  );
}
