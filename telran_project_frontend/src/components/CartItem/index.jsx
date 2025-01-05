import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteFromCartAction } from "../../store/reducers/cartReducer";

export default function CartItem({
  id,
  image,
  title,
  count,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price * count}$</p>
      <span>{discont_price}</span>

      <RxCross2 onClick={() => dispatch(deleteFromCartAction(id))} />
    </div>
  );
}
