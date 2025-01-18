import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../requests/products';
import FilterByPriceForm from '../../components/FilterByPriceForm';
import SortForm from '../../components/SortForm';
import { filterByPriceAction, sortAllProductsAction } from '../../store/reducers/productsReducer';
import Skeleton from '../../components/Skeleton';

export default function AllSalesPage() {

  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts());
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const productsState = useSelector((store) => store.products);

  const discountedProducts = productsState.filter(
    (product) => product.discont_price !== null && product.visible
  );



  return (
    <section className={s.container}>

      <div className={s.navigation}>
        <Link to='/' className={location.pathname === '/' ? `${s.link} ${s.active}` : s.link}
        >Main Page</Link>
        <div></div>
        <Link to='/all_sales' className={
          location.pathname === '/all_sales' ? `${s.link} ${s.active}` : s.link
        }>All Sales</Link>
      </div>

      <div className={s.discount_container}>
        <h2>Discounted items</h2>
        <div className={s.filter_container}>
          <FilterByPriceForm action={filterByPriceAction} />
          <SortForm action={sortAllProductsAction} />
        </div>
      </div>

      <div className={s.discounted_products}>
        {loading ? (
          <Skeleton count={11} />
        ) : (
          discountedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </section>

  )
}