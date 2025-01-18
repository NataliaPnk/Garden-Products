import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './index.module.css'

export default function DiscountCheckBox({action}) {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => setIsChecked(!isChecked);
    const handleClick = e => dispatch(action(e.target.checked));

  return (
    <div className={s.checkbox}>
        <span>Discounted items</span>
        <input type='checkbox' onChange={handleCheck} checked={isChecked} onClick={handleClick} />
    </div>
  )
}
