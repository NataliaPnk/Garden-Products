import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import s from './index.module.css'
import SortForm from '../../components/SortForm';
import FilterByPriceForm from '../../components/FilterByPriceForm';
import { filterFavoriteProductsAction, sortFavoriteProductsAction } from '../../store/reducers/favoriteReducer';
import ProductCard from '../../components/ProductCard';


export default function FavoriteProductsPage() {

    const location = useLocation();

    const favoriteState = useSelector((store) =>
        store.favoriteProducts.filter((product) => product.visible !== false)
    );

    return (

        <section className={s.container}>

            <div className={s.navigation}>
                <Link to='/' className={location.pathname === '/' ? `${s.link} ${s.active}` : s.link}
                >Main Page</Link>
                <div></div>
                <Link to='/favorite_products' className={location.pathname === '/favorite_products' ? `${s.link} ${s.active}` : s.link}
                >Liked Products</Link>
            </div>

            {favoriteState.length > 0 && (
                <div className={s.favorite_products_container}>
                    <h2>Liked products:</h2>
                    <div className={s.filter_container}>
                        <FilterByPriceForm action={filterFavoriteProductsAction} />
                        <SortForm action={sortFavoriteProductsAction} />
                    </div>
                </div>
            )}


            {favoriteState.length === 0
                ?
                <div className={s.emptyTitle}>
                    <p> You haven't added any favorite products yet.</p>
                    <Link to="/all_products">Go shopping</Link>
                </div>
                :
                <div className={s.favorite_products}>
                    {favoriteState.map((product) => (
                        <ProductCard key={product.id} {...product} />))}
                </div>

            }


        </section>
    )
}