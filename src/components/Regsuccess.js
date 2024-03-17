import { Link } from "react-router-dom"

const Regsuccess = () =>{
    return(
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
              />
            </div>
            <div className="flex flex-row mt-[7px] gap-7">
              <h2 className="text-[21px] font-sans font-semibold relative top-3">Last Name</h2>
              <input
                className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last name..."
              />
            </div>
            <div className="flex flex-row mt-[7px] gap-[4.8rem]">
              <h2 className="text-[21px] font-sans font-semibold relative top-3">Email</h2>
              <input
                className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-row mt-[7px] gap-6">
              <h2 className="text-[21px] font-sans font-semibold relative top-3">Nationality</h2>
              <input
                className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Nationality..."
              />
            </div>
            <div className="flex flex-row mt-[7px] gap-4">
              <h2 className="text-[21px] font-sans font-semibold relative top-3">Postal Code</h2>
              <input
                className="w-[60%] h-[30px] border-[3px] border-orange-900 mt-4 py-1 px-[20px] bg-[#fff] rounded-2xl"
                type="text"
                id="lname"
                name="Pcode"
                placeholder="Postal Code..."
              />
            </div>
            <button className="border-[3px] text-[20px] py-1 px-8 mt-[3rem] ml-[11rem] rounded-3xl border-orange-900 text-orange-900 hover:border-orange-900 hover:text-white hover:bg-orange-900">Submit</button>
           </div>
          </div>
        </div>
      </div>
    )
}
export default Regsuccess