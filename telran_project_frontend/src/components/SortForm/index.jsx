import React from 'react'
import { useDispatch } from 'react-redux'
import s from './index.module.css'

export default function SortForm({action}) {

    const dispatch = useDispatch();
    const sortProducts = e => dispatch(action(e.target.value))

  return (

    <div className={s.sort}>
        <span>Sorted</span>
        <select onInput={sortProducts}>
        <option value="default">by default</option>
        <option value="price_asc">Price: Low to Hight</option>
        <option value="price_desc">Price: Hight to Low</option> 
        </select>
    </div>
  )
}
