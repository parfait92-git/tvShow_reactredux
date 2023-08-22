import React from 'react';
import s from './TVShowDetail.module.css'
import { FiveStartRating } from '../FiveStarRating/FiveStartRating';
export const TVShowDetail = (props) => {
    const rating = props.tvShow.vote_average>10? 5 : props.tvShow.vote_average / 2
    return (
        <div className={s.detail}>
            <div className={s.title} >{props.tvShow.name} </div>
            <div className={s.rating_container}>
            <FiveStartRating rating={rating}/>
            <div className={s.rating} >{rating} </div>
            </div>
            <div className={s.overview} > {props.tvShow.overview} </div>
        </div>
    )
}