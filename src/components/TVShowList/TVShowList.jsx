import React from 'react';
import s from './TVShowList.module.css'
import { TVShowListItem } from '../TVShowListItem/TVShowListItem';

export const TVShowList = ({tvShowList, setRecommendedShow}) => {
    function setSelectedCurrentTvShow(e) {
        setRecommendedShow(e);
    }
    return (
        <div  className={s.cantainer}>
            <div className={s.title}>You may also like: </div>
            <div className={s.list}>
            {
                tvShowList.map((item, index) =>{
                    return (
                        <span  key={index} className={s.tv_show_list_item}>
                            {
                                item &&<TVShowListItem onClickTV={() => setSelectedCurrentTvShow(item)} tvShow={item} />
                            }
                        </span>
                    )
                } )
            }
            </div>
            
        </div>
    )
}