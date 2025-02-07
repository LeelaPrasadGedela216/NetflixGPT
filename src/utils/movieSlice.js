import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
   { name:"movies",
     initialState:{
        playingMovies:null,
        trailer:null,
     },
     reducers:{
        addPlayingmovies:(state,action)=>{
            state.playingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
         state.trailer=action.payload
        },
     },
   },

);
export const{addPlayingmovies,addTrailer}=movieSlice.actions;
export default movieSlice.reducer;