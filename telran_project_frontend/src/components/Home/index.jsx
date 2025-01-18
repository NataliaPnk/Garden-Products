import React from "react";
import s from "./index.module.css";

export default function Home() {
  return (
    <div className={s.home}>
      <div>
        <img src="./media/home-background.jpg" alt="home" />
      </div>
      <div>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button>Check out</button>
      </div>
    </div>
  );
}
