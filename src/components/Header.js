  import { useNavigate } from "react-router-dom";
  import { auth } from "../utils/firebase";
  import { signOut } from "firebase/auth";
  import { useSelector } from "react-redux";
  import {  onAuthStateChanged } from "firebase/auth"
  import { useEffect } from "react";
  import { useDispatch } from "react-redux";
  import {addUser,removeUser} from "../utils/userSlice";
  import { LOGO } from "../utils/constants";
  const Header=()=>{
    const dispatch=useDispatch();
      const navigate=useNavigate();
      const user= useSelector(store=>store.user);
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayname:displayName,photoURL:photoURL}));
                navigate("/browse")//if the use login then allow hin to redirect to browse page  //if the user succesffully Signins ,redirect him to browse page
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")//if the user log outs not allowing him to go to browse page only allowing to redirect to login page only;
              
            }
          });
          //below unsubscribe function will be called whenever the header component unmounts;
          return ()=>unsubscribe();
    },[])

      const handleclick=()=>{
          signOut(auth).then(() => {
            // Sign-out successful.
           
          }).catch((error) => {
            // An error happened.
          });
      }
      return (
          <div className="absolute bg-gradient-to-b from-black px-8 py-4 z-10 w-screen flex justify-between">
              <img  className=" w-[200px] " src={LOGO}/>

            {user&&<div className="flex space-x-2">
              <img  src={user?.photoURL} className="w-12 h-12 mt-4 rounded-full " />
            <div ><button className="bg-red-600   p-2 mt-4 font-bold rounded-lg text-white" onClick={handleclick}>Sign Out</button></div>
            </div>}
          </div>
      )
  }
  export default Header;