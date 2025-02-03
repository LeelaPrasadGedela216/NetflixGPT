import { useState } from "react";

const Login=()=>{
    const [isSignIn,setIsSignIn]=useState(true);
    const handleClick=()=>{
        setIsSignIn(!isSignIn);
    }
    return(
        <div>
            <div className="absolute h-full">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"/>
            </div>
            <div className="absolute bg-black p-10 md:w-6/12 lg:w-3/12 my-36 left-0 right-0 mx-auto rounded-lg text-white bg-opacity-85">
                <form className="flex flex-col items-center "> 
                    <h2 className="text-3xl font-semibold text-left w-full mb-4">{isSignIn?"Sign In":"Sign Up"}</h2>
                    {(!isSignIn && <input type="text" placeholder="Enter your Full Name" className="p-2 m-2  w-full rounded-md bg-gray-700"/>)}
                    <input type="email" placeholder="Enter your Email" className="p-2 m-2  w-full rounded-md bg-gray-700"/>
                    <input type="password" placeholder="Password" className="p-2 m-2 w-full rounded-md bg-gray-700"/>
                    <button className="bg-red-700 text-center w-full p-2 rounded-md my-8 font-semibold">Sign In</button>
                    <p className=" text-left w-full cursor-pointer" onClick={handleClick}>{isSignIn?"New to Netflix? Sign Up Now":"Already registerd?Sign In Now"}</p>
                </form>
            </div>
        </div>
    )
}
export default Login;