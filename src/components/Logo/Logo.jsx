import React from 'react';
import s from './Logo.module.css';
export const Logo = ({image, title, subtitle}) => {
    const startTitle = title.slice(0,3);
    const restTitle = title.slice(3);
    return (
        <>
        <div className={s.conatainer}>
            <img className={s.img} src={image} alt={title}/>
            <span className={s.title}> <span className={s.start_title}> {startTitle} </span> {restTitle} </span>
        </div>
        <span className={s.subtitle}>{subtitle} </span>
        </>
    )
}