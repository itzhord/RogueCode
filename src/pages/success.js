import { Link } from "react-router-dom"
const Success = () => {
    return(
        <>
      <div className="w-100 h-[5vh] bg-blue-400">
        <Link
          to="/"
          className="relative text-[12px] top-1.5 left-[85rem] bg-transparent border border-white text-white hover:border-white hover:text-blue-400 hover:bg-white py-1 px-5 rounded-2xl"
        >
          Homepage
        </Link>
      </div>
      <div className="h-[65vh] w-[100] bg-blue-400">
        <div className="relative text-white font-bold left-[20%] top-[7rem]">
        <h2 className=" font-sans text-[30px] mb-2"> Stay in touch with us </h2>
        <p className="font-sans text-[15px] mb-1"> To get our latest offers and services </p >
        <p className="font-sans text-[15px] font">On our react packages that meets your needs</p>
        </div>
      </div>
      <div className="w-[60%] h-[40vh] flex flex-row relative left-[20%] bottom-[12rem] bg-slate-400">
          <div className="flex flex-col w-3/5 h-[40vh] pl-[70px] pt-[30px] bg-white font-sans ">
            <h1 className="text-[40px] font-semibold mt-[40px]"> Thank you</h1>
            <h2 className="font-semibold"> For providing these information</h2>
            <h2 className="font-semibold"> You'll get the updates about our services</h2>
          </div>
          <div className="w-2/5 h-[40vh] p-[70px] font-sans font-semibold text-white bg-blue-950">
            <h2 className="mb-5">This is our information</h2>
            <h2 className="mb-5">Nigeria</h2>
            <h2>Port Harcourt</h2>
          </div>
      </div>
      </>
    )
} 

export default Success