import React from 'react';
import s from './TVShowListItem.module.css'
import { SMALL_IMG_COVER_BASE_URL } from '../../shared/services/config';
export const TVShowListItem = ({tvShow, onClickTV}) => {
    return (
        <div onClick={() => onClickTV(tvShow)} className={s.cantainer}>
            <img className={s.img} src={`${SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}`} alt={tvShow.name} />
            <div className={s.title} >
                {tvShow.name}
            </div>
        </div>
    )
}