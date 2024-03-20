import { Link } from "react-router-dom";
import Name from "../assets/contact.png"
import Email from "../assets/mail.png"
import Paassword from "../assets/password.png"
import { useState } from "react";
// import { withRouter } from "react-router-dom";
// import Regsuccess from "./Regsuccess";

const SignInForm = () => {


  return (
   <div className="w-[100] h-[100vh] bg-gradient-to-b from-[#2A00B7] to-[#14003a] ">
        <div  className="w-100 h-[5vh] bg-white">
        <Link to="/" className="relative top-1.5 left-[85rem] bg-transparent border border-[#2A00B7]  text-[#2A00B7] hover:border-[#2A00B7] hover:text-white hover:bg-[#2A00B7]  text-[10px] py-1 px-5 rounded-2xl"> Homepage</Link>
    </div>
    <div className=" relative left-[35%] top-[5rem] w-[27%] pb-[50px] bg-white">
        <div>
            <h2 className="text-[40px] font-bold relative top-[2.5rem] left-[8rem] text-[#2A00B7] ">Sign In</h2>
        </div>
        <div className="mt-[3.5rem] ml-[10%] ">
            
            <div className="mt-[8px]">
                <img className="w-[18px] relative left-[0.6rem] top-[1.85rem]"  src={Email}alt="Contact Icon" />
                <input className="w-[20rem] px-[35px] h-[3rem] bg-gray-100 border-none outline-none text-sm rounded-lg" type="email" placeholder="Email"/>
            </div>
            <div className="mt-[7px]">
                <img className="w-[16px] relative left-[0.7rem] top-[2rem]" src={Paassword}alt="Contact Icon" />
                <input className="w-[20rem] px-[35px] h-[3rem] bg-gray-100  border-none outline-none text-sm rounded-lg" type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="mt-3 ml-[3.5rem] text-[12px] font-mono ">
                <Link><p> Forgot password? <span className="font-semibold">Click here</span></p></Link>
                <Link to="/SignUp"><p> Don't have an account? <span className="font-semibold">Create here</span></p></Link>
            </div>
        <div className="ml-[9rem] mt-[1.5rem] ">
            <button className="bg-[#2A00B7] w-[8rem] h-[2.4rem] text-white  rounded-3xl">Sign In</button>
        </div>
    </div>
   </div>
  );
};

export default SignInForm;