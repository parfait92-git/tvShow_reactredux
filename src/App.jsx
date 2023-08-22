import React, { useEffect, useState } from 'react';
import './Global.css';
import s from './style.module.css';
import { TVShowAPI } from './shared/services/tvShowAPI';
import { BACKDROP_BASE_URL } from './shared/services/config';
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail';
import { Logo } from './components/Logo/Logo';
import logo from './assets/logo512.png'
import { TVShowList } from './components/TVShowList/TVShowList';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);
 const fetchPopulars = async () => {
  try {
    const populars = await TVShowAPI.fetchPopulars();
  if(populars.length > 0 ) {
    setCurrentTvShow(populars[0]);
    console.log(`url("${BACKDROP_BASE_URL}${populars[0].backdrop_path}"`)
  }
  } catch (error) {
    console.warn(error.message)
  }
 }

 const fetchRecommendations = async (tvShowId) => {
  try {
    const recom = await TVShowAPI.fetchRecommendtionsById(tvShowId);
  if(recom.length > 0 ) {
    setRecommendationList(recom.slice(0, 10));
  }
  } catch (error) {
    console.warn(error.message)
  }
 }

 async function searchTvSHow(e) {
  try {
    const searchResult =  await TVShowAPI.fetchByTitle(e);
    if(searchResult.length > 0) {
      setCurrentTvShow(searchResult[0]);
    }
  } catch (error) {
    console.warn(error.message);
  }
 }

 useEffect(() => {
  fetchPopulars();
 }, []);

 useEffect(() => {
  if(currentTvShow) {
    fetchRecommendations(currentTvShow.id);
  }
 }, [currentTvShow]);
 
  return (
    <div className={s.main_conatainer} style={{background: currentTvShow !== undefined ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center/ cover`: "#000"}}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo image={logo} title="CGI-Break_TUBE" subtitle="Find a show you may like" />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTvSHow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow&&<TVShowDetail tvShow={currentTvShow}/>}
      </div>
      <div className={s.recommendations}>
        {recommendationList.length>0 &&<TVShowList setRecommendedShow={setCurrentTvShow}  tvShowList={recommendationList} />}
      </div>
    </div>
  );
}

export default App;
