import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'


export default function FilterByPriceForm({action}) {

    const dispatch = useDispatch();

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(Infinity);

    const handleMinValue = e => setMinValue(e.target.value || 0);
    const handleMaxValue = e => setMaxValue (e.target.value || Infinity);

    useEffect(() => {
    dispatch(action({ minValue, maxValue }))
    }, [minValue, maxValue])
    

  return (
    <div className={s.price_filter}>
    <span>Price</span>
    <input type="number" placeholder='from' name='min' onChange={handleMinValue}/>
    <input type="number" placeholder='to' name='max' onChange={handleMaxValue}/>
  </div>
  )
}