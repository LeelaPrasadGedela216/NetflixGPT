import VideoTitle from './VideoTitle'
import VideoTrailer from './VideoTrailer'
import { useSelector, } from 'react-redux'

const MainContainer = () => {
    
    const now_playingMovies=useSelector((store)=>store.movie?.playingMovies);

   // console.log(now_playingMovies);
    
    if(!now_playingMovies) return ;//{early returning: by the time component renders if Store is not Updated with movies its giving null so if playing movies are null just return from this component}
 
    const mainMovie=now_playingMovies[0];
    const {original_title,overview,id}=mainMovie;
    //console.log(mainMovie);

  return (
    <div>
     <VideoTitle title={original_title} overview={overview}/>
     <VideoTrailer id={id}/> 
    </div>
  )
}

export default MainContainer
