import React, { useContext } from "react";
import { Context } from "../../context";
import { useSelector } from "react-redux";
import s from "../OrderDetailsForm/index.module.css";
import { useForm } from "react-hook-form";

export default function OrderDetailsForm() {
  const { setFeedbackActive } = useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const cartState = useSelector((store) => store.cart);

  const displayedTotal = cartState
    .reduce((acc, el) => {
      const priceToUse = el.discountPrice || el.discont_price || el.price;
      return acc + priceToUse * el.count;
    }, 0)
    .toFixed(2);

  const totalItems = cartState.reduce((acc, el) => acc + el.count, 0);

  const submit = (data) => {
    const newPurchase = {
      ...data,
      total: +displayedTotal,
      cart: cartState,
    };

    setFeedbackActive(true);

    console.log(newPurchase);

    reset();
  };

  const nameRegister = register("name", {
    required: "The name field must be filled out.",
    minLength: 3,
  });

  const phoneRegister = register("phone", {
    required: "The phone field must be filled out.",
    pattern: {
      value: /^[1-9]\d{2,12}$/,
      message:
        "*The phone number must include the country code followed by 10 digits.",
    },
  });

  const emailRegister = register("email", {
    required: "The email field must be filled out.",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "*Please enter a valid email address format",
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
      <h3>Order details</h3>
      <div>
        <p>
          {" "}
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </p>
        <div>
          <p>Total</p>
          <span>${displayedTotal}</span>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Name" {...nameRegister} />
        {errors.name && <p>{errors.name.message}</p>}
        <input type="text" placeholder="Phone Number" {...phoneRegister} />
        {errors.phone && <p>{errors.phone.message}</p>}
        <input type="email" placeholder="Email" {...emailRegister} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button>Order</button>
    </form>
  );
}
