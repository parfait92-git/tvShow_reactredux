import React, { useEffect, useState } from 'react';
import s from './FiveStarRating.module.css'
import { StarFill, Star as StarEmpty, StarHalf } from 'react-bootstrap-icons';
export const FiveStartRating = ({rating}) => {
    const starList = [];
    const startFillCount = Math.floor(rating);
    const hasStarHalf = rating - startFillCount >= 0.5;
    const emptyStartCount = 5 - startFillCount - (hasStarHalf ? 1 : 0);

    for(let i =1; i <= startFillCount; i++) {
        starList.push(<StarFill key={"star-fill"+i} />)
    }
    if(hasStarHalf) {
        starList.push(<StarHalf key={"star-half"} />)
    }
    for(let i =1; i <= emptyStartCount; i++) {
        starList.push(<StarEmpty key={"star-empty"+i} />)
    }
    
    return (
        <div className={s.detail}>
            {starList}
        </div>
    )
}