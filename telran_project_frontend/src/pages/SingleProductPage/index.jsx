import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getSingleProduct } from "../../requests/products";
import {
  changeStatusSingleProductAction,
  decrProductCountAction,
  incrProductCountAction,
} from "../../store/reducers/singleProductReducer";
import s from "../SingleProductPage/index.module.css";
import { FiHeart } from "react-icons/fi";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { addToFavoriteAction } from "../../store/reducers/favoriteReducer";

export default function SingleProductPage() {
  const dispatch = useDispatch();
  const location = useLocation();

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

  const favoriteState = useSelector((store) => store.favoriteProducts);

  const isFavorite = favoriteState.find((el) => el.id === id);

  const heartStyles = {
    fill: isFavorite ? "#92A134" : "",
    stroke: isFavorite ? "#92A134" : "",
  };

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
            <Link to="/" className={location.pathname === '/' ? `${s.link} ${s.active}` : s.link}
            >Main Page</Link>
            <div></div>
            <Link to="/all_categories" className={location.pathname === '/all_categories' ? `${s.link} ${s.active}` : s.link}
            >Categories</Link>
            <div></div>
            <Link to= {`/categories/${name.title}`} className={location.pathname === `/categories/${name.title}` ? `${s.link} ${s.active}` : s.link}
            >{name.title}</Link>
            <div></div>
            <Link to={`/products/${id}`} className={location.pathname === `/products/${id}` ? `${s.link} ${s.active}` : s.link}
            >{title}</Link>
          </div>

          <div className={s.singleCard}>
            <img src={`http://localhost:3333${image}`} />
            <div>
              <div className={s.title_price_part}>
                <div>
                  <h3>{title}</h3>
                  <FiHeart
                    onClick={() =>
                      dispatch(
                        addToFavoriteAction({
                          id,
                          image,
                          title,
                          price,
                          discont_price,
                        })
                      )
                    }
                    style={heartStyles}
                  />
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
                <button
                  onClick={() =>
                    dispatch(
                      addToCartAction({
                        id,
                        image,
                        title,
                        price,
                        discont_price,
                        count,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>

              <div className={s.description_part} id="description_part">
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
