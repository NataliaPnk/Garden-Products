import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../requests/products";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import s from "../ProductsByCategoryPage/index.module.css";
import Skeleton from "../../components/Skeleton";

export default function ProductsByCategoryPage() {
  const dispatch = useDispatch();
  const { category_name } = useParams();
  const [loading, setLoading] = useState(true);

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );

  useEffect(() => {
    dispatch(getProductsByCategory(category_name));
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000)
    return () => clearTimeout(timer)
  }, []);


  const name = productsByCategoryState.category || {};

  const products = productsByCategoryState.data || [];



  const [filteredProducts, setFilteredProducts] = useState(products)

  const [fromPrice, setFromPrice] = useState(0)

  const handleFromPriceChange = (e) => {
    const fromValue = e.target.value;
    setFromPrice(fromValue)

    const allProducts = products

    if (fromValue) {
      const filteredItems = allProducts?.filter((product) => {
        const from = fromValue || 0
        const to = toPrice || Number.POSITIVE_INFINITY
        const tooCheap = from > product.price
        const tooExpensive = to < product.price;
        return !tooCheap && !tooExpensive
      }
      );

      setFilteredProducts(filteredItems);

      return
    }

    setFilteredProducts(allProducts)
  }



  const [toPrice, setToPrice] = useState(0)

  const handleToPriceChange = (e) => {
    const toValue = e.target.value;
    setToPrice(toValue)

    const allProducts = products

    if (toValue) {
      const filteredItems = allProducts?.filter((product) => {
        const from = fromPrice || 0
        const to = toValue || Number.POSITIVE_INFINITY
        const tooCheap = from > product.price
        const tooExpensive = to < product.price
        return !tooCheap && !tooExpensive
      }
      );

      setFilteredProducts(filteredItems);

      return
    }

    setFilteredProducts(allProducts)
  }




  const [showOnlyDiscount, setShowOnlyDiscount] = useState(false)

  const handleShowOnlyDiscount = (e) => {
    const discountValue = e.target.checked;
    setShowOnlyDiscount(discountValue)

    const allProducts = products

    if (discountValue === true) {
      const filteredItems = allProducts?.filter((product) => { return product.discont_price > 0 }
      );


      setFilteredProducts(filteredItems);

      return
    }

    setFilteredProducts(allProducts)
  }


  const [sortProducts, setSortProducts] = useState('by-default')

  const handleSortProductsChange = (e) => {
    const sortValue = e.target.value;
    setSortProducts(sortValue)

    const allProducts = products

    if (sortValue === 'by-default') {

      setFilteredProducts(allProducts);

      return
    }
    if (sortValue === 'price-low-to-high') {
      const filteredItems = allProducts?.sort((a, b) => { return a.price - b.price }
      );

      setFilteredProducts(filteredItems);

      return
    }
    if (sortValue === 'price-high-to-low') {
      const filteredItems = allProducts?.sort((a, b) => { return b.price - a.price }
      );

      setFilteredProducts(filteredItems);

      return
    }

    setFilteredProducts(allProducts)
  }


  return (
    <section>
      <h2 style={{ marginBottom: "40px" }}>{name.title}</h2>
      <div className={s.filterContainer}>
        <div>Price</div>
        <input type="number" value={fromPrice} placeholder="from" onChange={handleFromPriceChange} />
        <input type="number" value={toPrice} placeholder="to" onChange={handleToPriceChange} />
        <div>Discounted items</div>
        <input type="checkbox" name="vehicle3" checked={showOnlyDiscount} onChange={handleShowOnlyDiscount} />
        <div>Sorted</div>
        <select value={sortProducts} onChange={handleSortProductsChange}>
          <option value="by-default">By default</option>
          <option value="price-low-to-high">Price low to high</option>
          <option value="price-high-to-low">Price high to low</option>
        </select>
      </div>

      {
        filteredProducts.length > 0
          ? <div className={s.container}>
            {filteredProducts.map((el) => (
              <ProductCard key={el.id} {...el} />
            ))}
          </div>
          :
          <div className={s.container}>
            {
              loading ? (
                <Skeleton count={11} />
              ) : (
                products.map((el) => (
                  <ProductCard key={el.id} {...el} />
                ))
              )
            }

          </div>
      }
    </section>
  );

}
