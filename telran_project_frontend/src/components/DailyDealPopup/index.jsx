import React, { useContext, useEffect } from "react";
import s from "../DailyDealPopup/index.module.css";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction } from "../../store/reducers/favoriteReducer";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { getDailyDeal } from "../../requests/products";
import { setDiscountProduct } from "../../store/reducers/dailyDealReducer";
import { Context } from "../../context";
import { RxCross2 } from "react-icons/rx";

export default function DailyDealPopup() {
  const dispatch = useDispatch();

  const { showPopup, setShowPopup } = useContext(Context);

  const productsState = useSelector((store) => store.products);
  const dailyDealState = useSelector((store) => store.deal);
  const favoriteState = useSelector((store) => store.favoriteProducts);

  useEffect(() => {
    dispatch(getDailyDeal());
  }, [dispatch]);

  useEffect(() => {
    if (
      productsState &&
      productsState.length > 0 &&
      dailyDealState &&
      dailyDealState.state &&
      !dailyDealState.product
    ) {
      setRandomDiscountedProduct();
    }
  }, [productsState, dispatch]);

  const setRandomDiscountedProduct = () => {
    if (productsState && productsState.length > 0) {
      const randomIndex = Math.floor(Math.random() * productsState.length);
      dispatch(setDiscountProduct(productsState[randomIndex]));
    }
  };

  const { id, image, title, price } = dailyDealState.product || {};
  const isFavorite = favoriteState.find((el) => el.id === id);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const heartStyles = {
    fill: isFavorite ? "#92A134" : "",
    stroke: isFavorite ? "#92A134" : "",
  };

  const handleHeart = (e) => {
    e.stopPropagation();
    dispatch(addToFavoriteAction({ id, image, title, price, discountPrice }));
  };

  const feedbackStyles = {
    display: showPopup ? "flex" : "none",
  };

  const discountPrice = price ? price * 0.5 : null;

  return (
    <div className={s.deal} style={feedbackStyles}>
      <div>
        <h3>50% discount on product of the day!</h3>
        <RxCross2 onClick={handleClosePopup} />
        <div className={s.dealCard}>
          <Link to={`/products/${id}`}>
            <img src={`http://localhost:3333${image}`} />
          </Link>
          <div>
            <FiHeart onClick={handleHeart} style={heartStyles} />
          </div>

          <div>
            <p>{title}</p>
            <div>
              <p style={{ fontSize: "18px" }}>
                ${discountPrice}{" "}
                <span
                  style={{ textDecoration: "line-through", fontSize: "16px" }}
                >
                  ${price}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() =>
            dispatch(
              addToCartAction({ id, image, title, price, discountPrice })
            )
          }
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
}
