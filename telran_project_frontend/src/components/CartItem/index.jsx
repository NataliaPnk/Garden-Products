import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  decrCartAction,
  deleteFromCartAction,
  incrCartAction,
} from "../../store/reducers/cartReducer";
import s from "../CartItem/index.module.css";

export default function CartItem({
  id,
  image,
  title,
  count,
  price,
  discont_price,
  discountPrice,
}) {
  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <img src={`http://localhost:3333${image}`} alt={title} />

      <div>
        <div>
          <p>{title}</p>
          <RxCross2 onClick={() => dispatch(deleteFromCartAction(id))} />
        </div>

        <div>
          <div>
            <button onClick={() => dispatch(decrCartAction(id))}>-</button>
            <div>{count}</div>
            <button onClick={() => dispatch(incrCartAction(id))}>+</button>
          </div>
          <div>
            {discont_price || discountPrice ? (
              <div>
                <p>${discont_price || discountPrice.toFixed(2) * count}</p>{" "}
                <span>${price * count}</span>
              </div>
            ) : (
              <p>${price * count}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
