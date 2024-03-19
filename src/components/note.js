// {/* <>
    
// {
// !submit ? (
// <div>

// <div>
//   <Link
//     to="/"
//     className="relative top-1.5 left-[85rem] bg-transparent border border-orange-900 text-orange-900 hover:border-orange-900 hover:text-white hover:bg-orange-900 text-[10px] py-1 px-5 rounded-2xl"
//   >
//     Homepage
//   </Link>
//   <div className="w-[100] h-[21.6vh] "></div>
//   <div className="w-[100] h-[75vh] bg-orange-900">
//   <div className="relative bottom-[6.7rem] ml-[30%] flex flex-col w-[40%] h-[75vh] ">
//     <div className="w-100 h-[15vh] bg-orange-900">
//       <div>
//         <div className=" font-sans font-bold ml-[2rem] text-white">
//           <h1 className="text-[2.5rem] mt-5">Registeration Form</h1>
//         </div>
//       </div>
//     </div>
//     <div className="w-100 h-[60vh] bg-white">
//      <div className="relative left-[10%] top-[1.6rem]">
//      <div className="flex flex-row gap-[15px]">
//         <h2 className="text-[21px] font-sans font-semibold relative top-3">First Name</h2>
//         <input
//           className="w-[60%] text-orange-900 font-semibold h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
//           type="text"
//           id="lname"
//           name="firstname"
//           placeholder="First Name..."
//           value={firstName} onChange={handleFirstNameChange}
//         />
//         {!formValid && firstNameError && <p className=" relative top-[3rem] right-[22rem] text-[12px] text-[#ff0800]" >
//           {firstNameError}</p>}
//       </div>
//       <div className="flex flex-row mt-[7px] gap-[15px]">
//         <h2 className="text-[21px] font-sans font-semibold relative top-3">Last Name</h2>
//         <input
//           className="w-[60%] h-[30px] text-orange-900 font-semibold border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
//           type="text"
//           id="lname"
//           name="lastname"
//           placeholder="Last name..."
//           value={lastName} onChange={handleLastNameChange}
//           />
//           {!formValid && lastNameError && <p className=" relative top-[3rem] right-[22rem] text-[12px] text-[#ff0800]">{lastNameError}</p>}
//       </div>
//       <div className="flex flex-row mt-[7px] gap-[15px]">
//         <h2 className="text-[21px] font-sans font-semibold relative top-3">Email Address</h2>
//         <input
//           className="w-[60%] h-[30px] text-orange-900 font-semibold border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Email Address"
//           value={email} onChange={handleEmailChange}
//         />
//         {!formValid && emailError && <p className=" relative top-[3rem] right-[22rem] text-[12px] text-[#ff0800]" >{emailError}</p>}
        
//       </div>
//       <div className="flex flex-row mt-[7px] gap-[15px]">
//         <h2 className="text-[21px] font-sans font-semibold relative top-3">Nationality</h2>
//         <input
//           className="w-[60%] h-[30px] text-orange-900 font-semibold border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
//           type="text"
//           id="lname"
//           name="lastname"
//           placeholder="Nationality..."
//           value={nationality} onChange={handleNationalityChange}
//           />
//           {!formValid && nationalityError && <p className=" relative top-[3rem] right-[22rem] text-[12px] text-[#ff0800]">{nationalityError}</p>}
//       </div>
//       <div className="flex flex-row mt-[7px] gap-[9px]">
//         <h2 className="text-[21px] font-sans font-semibold relative top-3">Postal Code</h2>
//         <input
//           className="w-[60%] h-[30px] text-orange-900 font-semibold border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
//           type="text"
//           id="lname"
//           name="Pcode"
//           placeholder="0000-0000..."
//         //   value={postalCode} onChange={handlePostalCodeChange}
//         />
//         {/* {!formValid && postalCodeError && <p className=" relative top-[3rem] right-[22rem] text-[12px] text-[#ff0800]">{postalCodeError}</p>} */}
//       </div>
//       <button onClick={handleSubmit} className="border-[3px] text-[20px] py-1 px-8 mt-[3rem] ml-[11rem] rounded-3xl border-orange-900 text-orange-900 hover:border-orange-900 hover:text-white hover:bg-orange-900">Submit</button>
//      </div>
//     </div>
//   </div>
//   </div>

// </div>
// </div>
//   ):(<Regsuccess email={email} />) */}