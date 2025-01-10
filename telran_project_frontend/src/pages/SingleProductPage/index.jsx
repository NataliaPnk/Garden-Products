import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../requests/products";
import {
  changeStatusSingleProductAction,
  decrProductCountAction,
  incrProductCountAction,
} from "../../store/reducers/singleProductReducer";
import s from "../SingleProductPage/index.module.css";
import { FiHeart } from "react-icons/fi";

export default function SingleProductPage() {
  const dispatch = useDispatch();

  const { product_id } = useParams();

  useEffect(() => {
    dispatch(changeStatusSingleProductAction());
    dispatch(getSingleProduct(product_id));
  }, []);

  const singleProductState = useSelector((store) => store.singleProduct);

  //const { category_name } = useParams();

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );

  const name = productsByCategoryState.category || {};

  const { id, image, title, price, discont_price, description, count } =
    singleProductState.state;

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const maxDescriptionLength = 270;

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <section>
      {singleProductState.status === "loading" ? (
        <p>Product is loading...</p>
      ) : (
        <div>
          <div className={s.navigation}>
            <Link to="/">Main Page</Link>
            <div></div>
            <Link to="/all_categories">Categories</Link>
            <div></div>
            <Link to={`/categories/${name.title}`}>{name.title}</Link>
            <div></div>
            <Link to={`/products/${id}`}>{title}</Link>
          </div>

          <div className={s.singleCard}>
            <img src={`http://localhost:3333${image}`} />
            <div>
              <div className={s.title_price_part}>
                <div>
                  <h3>{title}</h3>
                  <FiHeart />
                </div>
                <div>
                  <p>${price}</p>
                  {discont_price ? <span>${discont_price}</span> : null}
                  {discont_price ? (
                    <div>
                      {`-${(((price - discont_price) / price) * 100).toFixed(
                        0
                      )}%`}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className={s.quantity_part}>
                <div>
                  <button onClick={() => dispatch(decrProductCountAction())}>
                    -
                  </button>
                  <div>{count}</div>
                  <button onClick={() => dispatch(incrProductCountAction())}>
                    +
                  </button>
                </div>
                <button>Add to cart</button>
              </div>

              <div className={s.description_part}>
                <h6>Description</h6>
                <p>
                  {isDescriptionExpanded
                    ? description
                    : description.length > maxDescriptionLength
                    ? `${description.slice(0, maxDescriptionLength)}... `
                    : description}
                </p>

                {description.length > maxDescriptionLength && (
                  <button onClick={toggleDescription}>
                    {isDescriptionExpanded ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
