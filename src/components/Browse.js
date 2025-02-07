import useGetMovies from "../hooks/usegetMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
  const Browse=()=>{
    useGetMovies();
      return (
          <div>
            <Header/>
            
           <MainContainer/> 
           
           <SecondaryContainer/>
          </div>
      )
  }
  export default Browse;