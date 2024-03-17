import Mountain from "../assets/mountain.jpeg";
import { Link } from "react-router-dom";


const Tailwind = () => {
  return (
    <div className="relative">
      <div
        className={`justify-center  bg-no-repeat bg-cover bg-center h-screen w-100 rounded-lg`}
        style={{ backgroundImage: `url(${Mountain})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative shadow-lg">
        {/* Content */}
      </div >
        <div className=" relative z-2 w-4/5 justify-center space-x-60 mx-auto px-4 sm:px-6 lg:px-8 flex flex-row ">
        <div className="mt-5 ">
          <h2 className="text-xl font-bold text-blue-500 font-dela">Flyaz</h2>
        </div>
        <div className=" hidden md:block mt-5">
          <ul className="ml-4 flex items-center space-x-5">
          <a href="#" className="text-white font-bold text-l hover:text-blue-100">Facebook</a>
          <a href="#" className="text-white font-bold text-l hover:text-black">Twitter</a>
          <a href="#" className="text-white font-bold text-l hover:text-yellow-500">Snapchat</a>
          <a href="#" className="text-white font-bold text-l hover:text-red-500">Instagram</a>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded-2xl">Sign-up</a>
          </ul>
        </div>
        </div>
        <div className="relative z-3 flex justify-center text-center flex-col font-sans mt-48">
            <h1 className="text-9xl text-blue-200 font-bold ">Rogue Codes</h1>
            <h1 className="text-7xl text-blue-500  hover:text-white font-bold mt-2">React & Next.Js</h1>
            <div className="flex flex-row font-mono font-bold  justify-center space-x-10 mt-4">
            <Link to="/about" className="bg-transparent border border-gray-300 text-gray-300 hover:border-white  hover:text-black hover:bg-white py-1 px-5 rounded-2xl">Explore</Link>
            <Link to="/subscribe" className="bg-transparent border border-gray-300 text-gray-300 hover:border-white hover:text-black hover:bg-white py-1 px-5 rounded-2xl ">Subscribe</Link>
            </div>
            <div className="flex justify-center text-center flex-col mt-4 text-white font-mono">
          <p>Your one stop site to get the relevant infomation on all related studies about React</p>
          <p>You can check our socials to stay connected with us</p>

          <p className="font-mono text-xs mt-20"> DESIGNED AND CODED BY ROGUE CODES</p>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Tailwind;
