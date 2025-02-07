import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPlayingmovies } from "../utils/movieSlice";
const useGetMovies=()=>{
    const dispatch=useDispatch();

    const getMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
        const json=await data.json();
       // console.log(json);
        dispatch(addPlayingmovies((json.results)));
        //console.log("Movies pushed");

    };
useEffect(()=>{
    getMovies();
    },[])
}
export default useGetMovies;