import { useState,useRef } from "react";
import { Validation } from "../utils/SignInValidation";
import { auth } from "../utils/firebase";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Login=()=>{
    const navigate=useNavigate();//it is a hook used to navigate to specific route
    const [isSignIn,setIsSignIn]=useState(true);
    const [errormsg,seterrormsg]=useState(null);

    const email=useRef(null);
    const pwd=useRef(null);
    const name=useRef(null);
    
    const handleClick=()=>{
        setIsSignIn(!isSignIn);
    };
    const handleButtonClick=(e)=>{
        e.preventDefault();
        // console.log(email);
        // console.log(pwd);
        const message=Validation(email.current.value,pwd.current.value);
        seterrormsg(message);
      if(message) return ;//if I have error in signIn/sign Up then return from here only don't Go ahead
       
    //if signUp/SignIn(validation) is complete create a user
    if(!isSignIn)//SignUp logic
    {
        createUserWithEmailAndPassword(auth,email.current.value, pwd.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;//On succes of Sign in API give user object
                updateProfile(user, {
                    displayName:name.current.value,
                  }).then(() => {
                    // Profile updated!
                    navigate("/browse");
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
               //if the user succesffully SignUp ,redirect him to browse page

              
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrormsg(errorCode+" - "+errorMessage)
                // ..
            });
    }
    else//sign In logic
    {
        signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;// On Success login It will give user object
            //console.log(user)
        navigate("/browse");//if the user succesffully Signins ,redirect him to browse page

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode+" - "+errorMessage)
        });
    }

    }
    return(
        <div>
            <Header/>
            <div className="absolute h-full">
            <img  className ="sm:h-full lg:h-auto" src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"/>
            </div>
            <div className="absolute bg-black p-10 md:w-6/12 lg:w-3/12 my-36 left-0 right-0 mx-auto rounded-lg text-white bg-opacity-85">
                <form className="flex flex-col items-center "> 
                    <h2 className="text-3xl font-semibold text-left w-full mb-4">{isSignIn?"Sign In":"Sign Up"}</h2>
                    {(!isSignIn && <input type="text" ref={name} placeholder="Enter your Full Name" className="p-2 m-2  w-full rounded-md bg-gray-700"/>)}
                    <input  ref={email} type="email" placeholder="Enter your Email" className="p-2 m-2  w-full rounded-md bg-gray-700"/>

                    <input ref={pwd} type="password" placeholder="Password" className="p-2 m-2 w-full rounded-md bg-gray-700"/>

                    <button className="bg-red-700 text-center w-full p-2 rounded-md mt-6 font-semibold " onClick={handleButtonClick} >{isSignIn?"Sign In":"Sign Up"}</button>

                    {errormsg && (<p className="text-red-500 font-semibold text-lg text-left w-full my-4"> {errormsg}</p>)}

                    <p className=" text-left w-full cursor-pointer my-2"  onClick={handleClick}>{isSignIn?"New to Netflix? Sign Up Now":"Already registerd?Sign In Now"}</p>
                </form>
            </div>
        </div>
    )
}
export default Login;