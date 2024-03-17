import { Link } from "react-router-dom";
import { useState } from "react";
import Regsuccess from "./Regsuccess";

const Form = () => {
    const  [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [postalCode, setPostalCode ] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [submit, setSubmit] = useState(false);
  
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nationalityError, setNationalityError] = useState('');
    const [postalCodeError, setPostalCodeError ] = useState('');
  
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const postalCodeRegex = /[^0-9]/g

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
      setFirstNameError('');
    }
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
      setLastNameError('');
    }
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailError('');
    }
  
    const handleNationalityChange = (e) => {
      setNationality(e.target.value);
      setNationalityError('');
    }
  
    const handlePostalCodeChange = (e) => {
        setPostalCode(e.target.value);
      setPostalCodeError('');
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
  
      let isValid = true;
  
      if (!nameRegex.test(firstName.trim())) {
        setFirstNameError('Invalid First name');
        isValid = false;
      }
  
      if (!nameRegex.test(lastName.trim())) {
        setLastNameError('Invalid last name.');
        isValid = false;
      }
  
      if (!emailRegex.test(email.trim())) {
        setEmailError('Invalid email');
        isValid = false;      
      }
  
      if (!nameRegex.test(nationality.trim())) {
        setNationalityError('Invalid last name.');
        isValid = false;
      }

      if (!postalCodeRegex.test(postalCode.trim())) {
        setPostalCodeError('Invalid postal code.');
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

    <div>
      <Link
        to="/"
        className="relative top-1.5 left-[85rem] bg-transparent border border-orange-900 text-orange-900 hover:border-orange-900 hover:text-white hover:bg-orange-900 text-[10px] py-1 px-5 rounded-2xl"
      >
        Homepage
      </Link>
      <div className="w-[100] h-[25vh] "></div>
      <div className="w-[100] h-[75vh] bg-orange-900"></div>
      <div className="relative bottom-[40.2rem] ml-[30%] flex flex-col w-[40%] h-[75vh] ">
        <div className="w-100 h-[15vh] bg-orange-900">
          <div>
            <div className=" font-sans font-bold ml-[2rem] text-white">
              <h1 className="text-[2.5rem] mt-5">Registeration Form</h1>
            </div>
          </div>
        </div>
        <div className="w-100 h-[60vh] bg-white">
         <div className=" ml-[10%] mt-[1.6rem]">
         <div className="flex flex-row gap-6">
            <h2 className="text-[21px] font-sans font-semibold relative top-3">First Name</h2>
            <input
              className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
              type="text"
              id="lname"
              name="firstname"
              placeholder="First Name..."
              value={firstName} onChange={handleFirstNameChange}
            />
            {!formValid && firstNameError && <p className="mb-[-15px] text-[8px] text-[#ff0800]" >
              {firstNameError}</p>}
          </div>
          <div className="flex flex-row mt-[7px] gap-7">
            <h2 className="text-[21px] font-sans font-semibold relative top-3">Last Name</h2>
            <input
              className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last name..."
              value={lastName} onChange={handleLastNameChange}
              />
              {!formValid && lastNameError && <p className="mb-[-15px] text-[5px] text-[#ff0800]">{lastNameError}</p>}
          </div>
          <div className="flex flex-row mt-[7px] gap-[4.8rem]">
            <h2 className="text-[21px] font-sans font-semibold relative top-3">Email</h2>
            <input
              className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email} onChange={handleEmailChange}
            />
            {!formValid && emailError && <p className="relative bottom-[-50px] right-[21rem] text-[8px] text-[#ff0800]">{emailError}</p>}
          </div>
          <div className="flex flex-row mt-[7px] gap-6">
            <h2 className="text-[21px] font-sans font-semibold relative top-3">Nationality</h2>
            <input
              className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
              type="text"
              id="lname"
              name="lastname"
              placeholder="Nationality..."
              value={nationality} onChange={handleNationalityChange}
              />
              {!formValid && nationalityError && <p className="relative bottom-[-50px] right-[20rem] text-[8px] text-[#ff0800]">{nationalityError}</p>}
          </div>
          <div className="flex flex-row mt-[7px] gap-4">
            <h2 className="text-[21px] font-sans font-semibold relative top-3">Postal Code</h2>
            <input
              className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
              type="text"
              id="lname"
              name="Pcode"
              placeholder="Postal Code..."
              value={postalCode} onChange={handlePostalCodeChange}
            />
            {!formValid && postalCodeError && <p className="relative bottom-[-50px] right-[20rem] text-[8px] text-[#ff0800]">{postalCodeError}</p>}
          </div>
          <button onClick={handleSubmit} className="border-[3px] text-[20px] py-1 px-8 mt-[3rem] ml-[11rem] rounded-3xl border-orange-900 text-orange-900 hover:border-orange-900 hover:text-white hover:bg-orange-900">Submit</button>
         </div>
        </div>
      </div>
    </div>
    </div>
      ):(<Regsuccess />)
}

   
    </>
  );
};

export default Form;
