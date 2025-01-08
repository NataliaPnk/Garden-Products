import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import { SlHeart } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";


export default function Header() {

  const favoriteState = useSelector((store) => store.favoriteProducts);
  const favoriteCount = favoriteState.length

  return (
    <header className={s.header}>
      <div>
        <img src="./media/logo.png" alt="logo" />
        <img src="./media/mode.png" alt="mode" />
      </div>
      <div>
        <div>
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
        <Link to='/favorite_products'>
          <FiHeart />
          {favoriteCount > 0 && <span>{favoriteCount}</span>}
        </Link>
        <img src="./media/cart.png" alt="cart" />

      </div>
    </header>
  );
}
