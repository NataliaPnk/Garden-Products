import React from 'react'
import s from './index.module.css'

export default function Skeleton({count = 11}) {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div key={index} className={s.skeleton_item}></div>
            ))}                
            
        </>
    )
}
