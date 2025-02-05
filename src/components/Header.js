import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
const Header=()=>{
    const navigate=useNavigate();
    const handleclick=()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
          navigate("/");
        }).catch((error) => {
          // An error happened.
        });
    }
    return (
        <div className="absolute bg-gradient-to-b from-black px-8 py-4 z-10 w-screen flex justify-between">
            <img  className=" w-[200px] " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
           <div cl><button className="bg-red-600   p-2 mt-4 font-bold rounded-lg text-white" onClick={handleclick}>Sign Out</button></div>
        </div>
    )
}
export default Header;