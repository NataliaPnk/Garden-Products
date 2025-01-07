import React, { useContext } from "react";
import { Context } from "../../context";
import { useSelector } from "react-redux";

export default function OrderDetailsForm({ count }) {
  const { setFeedbackActive } = useContext(Context);

  const cartState = useSelector((store) => store.cart);

  const total = cartState
    .reduce((acc, el) => acc + el.price * el.count, 0)
    .toFixed(2);

  const submit = (e) => {
    e.preventDefault();

    const { name, phone, email } = e.target;

    const newPurchase = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      totalPrice: +total,
      cart: cartState,
    };

    setFeedbackActive(true);

    console.log(newPurchase);

    e.target.reset();
  };

  return (
    <form onSubmit={submit}>
      <h2>Order details</h2>
      <p>{count} items</p>
      <p>Total {total}</p>

      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Phone Number" name="phone" />
      <input type="email" placeholder="Email" name="email" />
      <button>Order</button>
    </form>
  );
}
