import React from "react";
import imageHands from "../DiscountForm/media/imageHands.png";
import { useForm } from "react-hook-form";
import s from "../DiscountForm/index.module.css";

export default function DiscountForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getDiscount = (data) => {
    console.log(data);
    alert("The discount has been successfully sent by email");
    reset();
  };

  const nameControl = register("name", {
    required: "Wrong input. Try again",
  });
  const phoneControl = register("phone", {
    required: "Wrong input. Try again",
    pattern: {
      value:
        /^\+?[1-9]\d{1,14}$|^[(]?[0-9]{1,4}[)]?[-\s\]?[0-9]{1,4}[-\s\]?[0-9]{1,4}$/,
      message: "The phone number format is incorrect.",
    },
  });
  const emailControl = register("email", {
    required: "Wrong input. Try again",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "This doesn’t look like a valid e-mail.",
    },
  });

  return (
    <section>
      <div className={s.discountForm}>
        <h2>5% off on the first order</h2>

        <div>
          <img src={imageHands} alt="People holding tools" />

          <div>
            <form onSubmit={handleSubmit(getDiscount)}>
              <input type="text" placeholder="Name" {...nameControl} />
              {errors.name && <p>{errors.name?.message}</p>}
              <input type="text" placeholder="Phone number" {...phoneControl} />
              {errors.phone && <p>{errors.phone?.message}</p>}
              <input type="email" placeholder="Email" {...emailControl} />
              {errors.email && <p>{errors.email?.message}</p>}
              <button type="submit">Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
