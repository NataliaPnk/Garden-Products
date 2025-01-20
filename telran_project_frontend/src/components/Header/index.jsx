import React, { useContext } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import DarkMode from "../DarkMode";
import { Context } from "../../context";

export default function Header() {
  const { setShowPopup } = useContext(Context);

  const favoriteState = useSelector((store) => store.favoriteProducts);
  const favoriteCount = favoriteState.length;

  const cartState = useSelector((store) => store.cart);
  const cartCount = cartState.reduce((acc, el) => acc + el.count, 0);

  const handleDailyDeal = () => {
    setShowPopup(true);
  };

  return (
    <header className={s.header}>
      <div>
        <img src="./media/logo.png" alt="logo" />
        <DarkMode />
      </div>
      <div>
        <div onClick={handleDailyDeal}>
          <button>1 day discount</button>
        </div>
        <nav>
          <Link to="/">Main Page </Link>
          <Link to="/all_categories">Categories</Link>
          <Link to="/all_products">All products</Link>
          <Link to="/all_sales">All sales</Link>
        </nav>
      </div>

      <div className={s.icons}>
        <Link to="/favorite_products">
          <FiHeart />
          {favoriteCount > 0 && <span>{favoriteCount}</span>}
        </Link>
        <Link to="/cart">
          <HiOutlineShoppingBag />
          {cartCount > 0 && <span>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}
