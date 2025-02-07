import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTrailer } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
const useTrailer = ({id}) => {
    const dispatch=useDispatch();
 
  const getMovies=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
    const json=await data.json();
    //console.log(json?.results);
    const filtered=json.results?.filter((video)=>video?.type=='Trailer');
    const trailer_final=(filtered?.length)?filtered[0]:json.results[0];
    dispatch(addTrailer(trailer_final));

    
  }
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default useTrailer
