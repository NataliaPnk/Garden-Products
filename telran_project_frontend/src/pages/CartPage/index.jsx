import React from "react";
import CartContainer from "../../components/CartContainer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderDetailsForm from "../../components/OrderDetailsForm";
import s from "../CartPage/index.module.css";

export default function CartPage() {
  const cartState = useSelector((store) => store.cart);

  return (
    <section className={s.cart}>
      <div>
        <h2>Shopping cart</h2>
        <div></div>
        <Link to="/">Back to the store</Link>
      </div>

      {cartState.length === 0 ? (
        <div>
          {" "}
          <p>Looks like you have no items in your basket currently.</p>
          <button>
            <Link to="/all_products">Continue Shopping</Link>
          </button>
        </div>
      ) : (
        <div className={s.cartWrapper}>
          <CartContainer />
          <OrderDetailsForm />
        </div>
      )}
    </section>
  );
}
