import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products';
import { Link, useLocation } from 'react-router-dom';
import FilterByPriceForm from '../../components/FilterByPriceForm';
import SortForm from '../../components/SortForm';
import { filterByPriceAction, filterDiscountedProductsAction, sortAllProductsAction } from '../../store/reducers/productsReducer';
import Skeleton from '../../components/Skeleton';
import DiscountCheckBox from '../../components/DiscountCheckBox';
import ProductCard from '../../components/ProductCard';

export default function AllProductsPage() {

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
  
  
    const allProductsState = useSelector(store => store.products)

  return (
    <section className={s.container}>

    <div className={s.navigation}>
      <Link to='/' className={location.pathname === '/' ? `${s.link} ${s.active}` : s.link}
      >Main Page</Link>
      <div></div>
      <Link to='/all_products' className={
        location.pathname === '/all_products' ? `${s.link} ${s.active}` : s.link
      }>All Products</Link>
    </div>

    <div className={s.all_products_container}>
      <h2>All Products</h2>
      <div className={s.filter_container}>
        <FilterByPriceForm action={filterByPriceAction} />
        <DiscountCheckBox action={filterDiscountedProductsAction}/>
        <SortForm action={sortAllProductsAction} />
      </div>
    </div>

    <div className={s.all_products}>
      {loading ? (
          <Skeleton count={11} />
      ) :  (
        allProductsState
          .filter((el) => el.visible)
          .map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </div>
  </section>

  )
}