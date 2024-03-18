import { Link } from "react-router-dom";
import Image from "../assets/plain.png";


const Explore = () => {
  return (
    <>
    <div  className="w-100 h-[5vh] bg-white">
        <Link to="/" className="relative top-1.5 left-[85rem] bg-transparent border border-blue-950 text-blue-950 hover:border-blue-950 hover:text-white hover:bg-blue-950 text-[10px] py-1 px-5 rounded-2xl"> Homepage</Link>
    </div>
    <div className=" flex flex-row  justify-center w-100 h-[60vh] bg-blue-950">
      <div className="font-bold">
        <div className="mt-[5rem] ml-[7rem]">
          <h1 className="text-white relative top-[2rem] text-[3.5rem]">Learn how to</h1>
          <h1 className=" text-white text-[2.8rem]">
            Create webpages
          </h1>
          <h1 className="text-white relative bottom-[12px] text-[25px]">For your brand using React</h1>
          <Link to="/Form" className="bg-transparent border border-gray-300 text-gray-300 hover:border-white  hover:text-black hover:bg-white py-1 px-5 rounded-2xl">Register Now</Link>
        </div>
      </div>
      <div>
        <img
          className=" relative w-[40rem] left-[-1rem] top-[0.2rem]"
          src={Image}
          alt="Image of a developer"
        />
      </div>
    </div>
    </>
  );
};

export default Explore;
