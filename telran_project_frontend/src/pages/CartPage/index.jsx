import React from "react";
import CartContainer from "../../components/CartContainer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderDetailsForm from "../../components/OrderDetailsForm";

export default function CartPage({ count }) {
  const cartState = useSelector((store) => store.cart);

//console.log(cartState);

  return (
    <div>
      {cartState.length === 0 ? (
        <div>
          {" "}
          <p>Looks like you have no items in your basket currently.</p>
          <button>
            <Link to="/all_products">Continue Shopping</Link>
          </button>
        </div>
      ) : (
        <div>
          <CartContainer />
          <OrderDetailsForm count={count} />
        </div>
      )}
    </div>
  );
}
