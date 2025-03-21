import React from "react";
import s from "../ProductCard/index.module.css";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  addToCartAction,
  deleteFromCartAction,
} from "../../store/reducers/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction } from "../../store/reducers/favoriteReducer";

export default function ProductCard({
  id,
  image,
  title,
  price,
  discont_price,
  discountPrice,
}) {
  const dispatch = useDispatch();

  const cartState = useSelector((store) => store.cart);
  const isInCart = cartState.find((el) => el.id === id);

  const favoriteState = useSelector((store) => store.favoriteProducts);
  const isFavorite = favoriteState.find((el) => el.id === id);

  const cartIconStyle = {
    fill: isInCart ? "#92A134" : "",
    stroke: isInCart ? "#92A134" : "",
    transform: "scaleX(-1)",
  };

  const heartStyles = {
    fill: isFavorite ? "#92A134" : "",
    stroke: isFavorite ? "#92A134" : "",
  };

  const handleCartToggle = (e) => {
    e.stopPropagation();
    dispatch(
      isInCart
        ? deleteFromCartAction(id)
        : addToCartAction({ id, image, title, price, discont_price })
    );
  };

  return (
    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333${image}`} />
      </Link>
      <div>
        <FiHeart
          onClick={() =>
            dispatch(
              addToFavoriteAction({ id, image, title, price, discont_price })
            )
          }
          style={heartStyles}
        />
        <LuShoppingCart style={cartIconStyle} onClick={handleCartToggle} />
      </div>

      <div>
        <p>{title}</p>

        <div>
          {discont_price || discountPrice ? (
            <div>
              <p>${discont_price || discountPrice.toFixed(2)}</p>{" "}
              <span>${price}</span>
              {discont_price ? (
                <div className={s.discount_mark}>
                  {`-${(((price - discont_price) / price) * 100).toFixed(0)}%`}
                </div>
              ) : null}
            </div>
          ) : (
            <p>${price}</p>
          )}
        </div>
      </div>

      <div
        onClick={() =>
          dispatch(addToCartAction({ id, image, title, price, discont_price }))
        }
      >
        Add to Cart
      </div>
    </div>
  );
}
