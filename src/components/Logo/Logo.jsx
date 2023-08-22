import React from 'react';
import s from './Logo.module.css';
export const Logo = ({image, title, subtitle}) => {
   
    return (
        <>
        <div className={s.conatainer}>
            <img className={s.img} src={image} alt={title}/>
            <span className={s.title}>{title} </span>
        </div>
        <span className={s.subtitle}>{subtitle} </span>
        </>
    )
}