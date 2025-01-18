import React, { useContext } from "react";
import { Context } from "../../context";
import { RxCross2 } from "react-icons/rx";
import s from "../FeedbackWindow/index.module.css";
import { useDispatch } from "react-redux";
import { clearAllFromCartAction } from "../../store/reducers/cartReducer";

export default function FeedbackWindow() {
  const { feedbackActive, setFeedbackActive } = useContext(Context);

  const dispatch = useDispatch();

  const feedbackStyles = {
    display: feedbackActive ? "flex" : "none",
  };

  const closeFeedbackWindow = () => {
    setFeedbackActive(false);
    dispatch(clearAllFromCartAction());
  };

  return (
    <div className={s.feedback} style={feedbackStyles}>
      <div>
        <div>
          <h3>Congratulations!</h3>
          <RxCross2 onClick={closeFeedbackWindow} />
        </div>
        <div>
          <p>
            Your order has been successfully placed <br /> on the website.
          </p>
          <p>
            A manager will contact you shortly <br /> to confirm your order.
          </p>
        </div>
      </div>
    </div>
  );
}
