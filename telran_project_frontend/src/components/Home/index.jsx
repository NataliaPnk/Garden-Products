import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={s.home}>
      <div>
        <img src="./media/home-background.jpg" alt="home" />
      </div>
      <div>
        <h1>Amazing Discounts on Garden Products!</h1>
        <Link to="/all_sales">
          <button>Check out</button>
        </Link>
      </div>
    </div>
  );
}
