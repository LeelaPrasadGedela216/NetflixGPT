import React, { useEffect } from 'react';
import useTrailer from '../hooks/useTrailer';
import { useSelector } from 'react-redux';

const VideoTrailer = (id) => {
useTrailer(id);
const trailer= useSelector(store=>store.movie.trailer);
  return (
    <div className=''>
  <iframe 
    src={`https://www.youtube.com/embed/${trailer?.key}?si=gqid0V2GV5cWsbVP&autoplay=1&mute=1`} 
    title="YouTube video player" 
    className='w-full aspect-video'
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
    >
  </iframe>
</div>

  )
}

export default VideoTrailer
