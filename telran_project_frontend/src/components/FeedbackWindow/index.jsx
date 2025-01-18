import React, { useContext } from "react";
import { Context } from "../../context";
import { RxCross2 } from "react-icons/rx";

export default function FeedbackWindow() {
  const { feedbackActive, setFeedbackActive } = useContext(Context);

  const feedbackStyles = {
    display: feedbackActive ? "flex" : "none",
  };

  const closeFeedbackWindow = () => setFeedbackActive(false);

  return (
    <div style={feedbackStyles}>
      <div>
        <RxCross2 onClick={closeFeedbackWindow} />
        <h3>Congratulations!</h3>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    </div>
  );
}
