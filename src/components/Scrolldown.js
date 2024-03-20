import Transport from "../assets/transport.jpeg";
import Manufacturing from "../assets/manufacturing.jpeg";
import Farming from "../assets/farming.jpeg";
import Health from "../assets/health.jpeg";
import Construction from "../assets/construction.jpeg";
import Fashion from "../assets/fashion.jpeg";
import Estate from "../assets/estate.jpeg";
import Export from "../assets/export.jpeg";
import Engineer from "../assets/Engineer.png"

const Scroll = () => {
  return (
    <div className="flex flex-col w-[100] h-auto bg-gray-2 00 ">
      <div className="text-center font-mono mt-[40px] ">
        <h2 className="font-mono text-[40px] font-semibold">Build sites that support your Brand</h2>
        <p className="mt-[-10px]">Gain industry based knowledge on React development</p>
      </div>
      <div className="flex flex-row ml-[12.5%] mt-[40px] w-[75%] gap-[15px]">
        <div className="w-1/4">
          <img src={Transport} />
          <h2 className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] bg-whit rounded-lg">Transport</h2>
        </div>
        <div className="w-1/4">
          <img src={Manufacturing} />
          <h2  className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] rounded-lg">Manufacturing</h2>
        </div>
        <div className="w-1/4">
          <img src={Farming} />
          <h2  className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] rounded-lg">Farming</h2>
        </div>
        <div className="w-1/4">
          <img src={Health} />
          <h2  className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] rounded-lg">Health</h2>
        </div>
      </div>
      <div className="flex flex-row ml-[12.5%] mt-[20px] w-[75%] gap-[15px] pb-[30px]">
        <div>
          <img src={Construction} />
          <h2 className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] rounded-lg">Construction</h2>
        </div>
        <div>
          <img src={Fashion} />
          <h2 className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] rounded-lg">Fashion</h2>
        </div>
        <div>
          <img src={Estate} />
          <h2 className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] rounded-lg">Estate</h2>
        </div>
        <div>
          <img src={Export} />
          <h2 className="w-[100%] h-[28px] border-[2px] border-gray-400 text-center mt-[5px] rounded-lg">Export</h2>
        </div>
      </div>
      <div className=" flex flex-col items-center mt-[60px] pb-[40px] justify-center">
        <h1 className="text-[50px] font-mono font-bold ">with over 100+ teachers</h1>
        <p className="mt-[-15px] font-mono font-semibold ">Learn from the best</p>
        <img className="w-[600px] " src={Engineer} />
        <p className="font-mono mt-[10px] font-semibold ">Enroll with us and become a Pro</p>
      </div>
    </div>
  );
};

export default Scroll;
