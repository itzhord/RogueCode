import Amateur from "../assets/amateur.png"
import Intermediate from "../assets/intermediate.png"
import Career from "../assets/career.png"

const FootExplore = () => {
  return (
    <div className="h-[0vh] text-[13px] w-100 flex flex-row">
      <div className="w-1/3 h-[35vh]  justify-center items-center bg-[#3EC1D3]">
        <div className="ml-[4rem] p-[20px]">
            <img className=" mt-3 w-[50px]" src={Amateur} alt="Amateur logo" />
          <h2 className="mt-[10px] text-[15px] font-bold text-white">
            Are you a beginner? Start here
          </h2>
          <p className="mt-3">
            Click here to start your journey in React as </p>
            <p> amateur and start making basic webpages</p>
          <button className="bg-transparent border border-gray-300 text-black hover:border-white  hover:text-black hover:bg-white py-1 px-5 rounded-xl mt-3">Click Here</button>
        </div>
      </div>
      <div className="w-1/3 h-[35vh] bg-[#556EE6]">
        <div className="ml-[4rem] p-[20px]">
        <img className="mt-3 w-[50px]" src={Intermediate} alt="Amateur logo" />
          <h2 className="mt-[10px] text-[15px] font-bold text-white">
            Are an Intermediate React Dev Continue here
          </h2>
          <p className="mt-3">
            Click on the Advanced Course if you're an intermediate </p>
            <p>developer and want to advance your knowledge on React</p>
          <button className="bg-transparent border border-gray-300 text-black hover:border-white  hover:text-[#556EE6] hover:bg-white py-1 px-5 rounded-xl mt-3">Click Here</button>
        </div>
      </div>
      <div className="w-1/3  h-[35vh] bg-[#574B90]">
        <div className="ml-[4rem] p-[20px]">
        <img className="mt-3 w-[50px]" src={Career} alt="Amateur logo" />
          <h2 className="mt-[10px] text-[15px] font-bold text-white">
            Want to Builda Career? Finish up here
          </h2>
          <p className="mt-3">
            Click on the button below to master concepts</p>
            <p> on react to start up your career in React</p>
          <button className="bg-transparent border border-gray-300 text-black hover:border-white  hover:text-[#574B90] hover:bg-white py-1 px-5 rounded-xl mt-3">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default FootExplore;
