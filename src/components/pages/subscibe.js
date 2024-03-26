import { Link } from "react-router-dom";
import { useState } from "react";
import MainPage from "./mainpage";
import Success from "./success";


const Subscribe = () => {
  const  [firstName, setFirstName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [orgError, setOrgError] = useState('');
  const [emailError, setEmailError] = useState('');

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError('');
  }
  const handleOrgChange = (e) => {
    setOrgName(e.target.value);
    setOrgError('');
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    let isValid = true;

    if (!nameRegex.test(firstName.trim())) {
      setFirstNameError('Invalid First name');
      isValid = false;
    }

    if (!nameRegex.test(orgName.trim())) {
      setOrgError('Invalid last name.');
      isValid = false;
    }

    if (!emailRegex.test(email.trim())) {
      setEmailError('Invalid email address.');
      isValid = false;      
    }

    if (isValid) {
      // Submit the form or perform other actions as needed
      setSubmit(true);
    } else {
      setSubmit(false);
  }
  }
  return (
    <>
    
    {
  !submit ? (
    <div>
      <div className="w-100 h-[5vh] bg-[#2A00B7] ">
        <Link
          to="/"
          className="relative text-[12px] top-1.5 left-[85rem] bg-transparent border border-white text-white hover:border-white hover:text-blue-400 hover:bg-white py-1 px-5 rounded-2xl"
        >
          Homepage
        </Link>
      </div>
      <div className="h-[65vh] w-[100] bg-gradient-to-b from-[#2A00B7] to-[#14003a] ">
        <div className="relative text-white font-bold left-[20%] top-[7rem]">
        <h2 className="  text-[30px] mb-2"> Stay in touch with us </h2>
        <p className=" text-[15px] mb-1"> To get our latest offers and services </p >
        <p className=" text-[15px] font">On our react packages that meets your needs</p>
        </div>
      </div>
      <div className="w-[60%] h-[40vh] flex flex-row relative left-[20%] bottom-[12rem] bg-slate-400">
          <div className="flex flex-col w-3/5 h-[40vh] pl-[70px] pt-[30px] bg-white  ">
            <h3 className="font-bold text-blue-800">Kindly Provide these infomation</h3>
            <div className="flex flex-col ">
                <div>
                <input className="w-[80%] border-[3px] border-blue-800 mt-4 py-1 px-[20px] bg-[#fff]"
                type="text"
                id="lname"
                name="lastname"
                placeholder="First name..."
                value={firstName} onChange={handleFirstNameChange}
              />
              {!formValid && firstNameError && <p className="mb-[-15px] text-[12px] text-[#ff0800]" >
              {firstNameError}</p>}
                </div>
                <div>
                <input className="w-[80%] border-[3px] border-blue-800 mt-4 py-1 px-[20px] bg-[#fff]"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Organization / Institution if any..."
                value={orgName} onChange={handleOrgChange}
              />
              {!formValid && orgError && <p className="mb-[-15px] text-[12px] text-[#ff0800]">{orgError}</p>}
                </div>
             <div>
             <input className="w-[80%] border-[3px] border-blue-800 mt-4 py-1 px-[20px] bg-[#fff]"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email} onChange={handleEmailChange}
              />
               {!formValid && emailError && <p className="mb-[-15px] text-[12px] text-[#ff0800]">{emailError}</p>}
             </div>
            </div>
            
            <button onClick={handleSubmit} className="border-[3px] w-[20%] bg-blue-800 mt-4 text-white py-[4px] px-[6px] font-semibold ml-[17rem] mt-[1rem] rounded-2xl ">Submit</button>
          </div>
          <div className="w-2/5 h-[40vh] p-[70px]  font-semibold text-white bg-blue-600">
            <h2 className="mb-5">This is our information</h2>
            <h2 className="mb-5">Nigeria</h2>
            <h2>Port Harcourt</h2>
          </div>
      </div>
      </div>
      ):(<Success />)
}

   
    </>
  );
};
export default Subscribe