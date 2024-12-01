import React from 'react'
import {Link} from 'react-router-dom'
import s from './index.module.css'

export default function Header() {
  return (
    <header className={s.header}>
        <div>
            <img src="./media/logo.png" alt="logo" />
            <img src="./media/mode.png" alt="mode" />
        </div>
        <div>
          <div>
          <button>1 day discount</button>
          </div>
          <nav>
           <Link to='/'>Main Page </Link>
           <Link to='/all_categories'>Categories</Link>
           <Link to='/all_products'>All products</Link>
           <Link to='/all_sales'>All sales</Link>
       </nav>
        </div>
    
        <div>
            <img src="./media/like.png" alt="like" />
            <img src="./media/cart.png" alt="cart" />
        </div>
    </header>
  )
}
