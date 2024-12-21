import React, { useState } from "react";
import s from "./index.module.css";
import { FiHeart } from "react-icons/fi";


export default function Product({
  id,
  image,
  title,
  price,
  discont_price,
  description,
}) {

  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }


  return (
    <>
    <div className={s.product}>
      <div className={s.left_product}>
        <img src={`http://localhost:3333${image}`} />
      </div>

      <div className={s.right_product}>
        <div className={s.title_product}>
        <h3>{title}</h3>
        <FiHeart className={s.icon_product}/>
        </div>

        <div className={s.price_product}>
          <div className={s.final_price}>${discont_price}</div>
          <div className={s.price}>${price}</div>
          <div className={s.discount}>{-(((price - discont_price) / price) * 100).toFixed(0)+'%'}</div>
        </div>

        <div className={s.cart_product}>
          <div className={s.cart_input}>
             <button onClick={decrementCount}>-</button>
             <div>{count}</div>
             <button onClick={incrementCount}>+</button>
          </div>
          <button>Add to cart</button>
        </div>

         <div className={s.description_product}>
         <h6>Description</h6>
         <p>{description}</p>
         <p>Read more</p>
         </div>
      </div>
    </div>
    </>
  );
}
