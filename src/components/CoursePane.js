import { Link } from "react-router-dom";
import { faCircleDot, faChartBar, faBook, faComment, faTools, faArrowRight, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoursePane = () => {
  return (
    <div className="w-1/5 h-[100vh] mt-[0.5rem] flex flex-col flex flex-col bg-gradient-to-b from-[#2A00B7] to-[#14003a] rounded-2xl">
      <div className="mt-[3rem] mb-[3rem] ">
        <h2 className="text-[20px] font-semibold text-white ml-[5rem]"><FontAwesomeIcon className="text-white text-[20px]" icon={faCircleDot} /> Courses</h2>
      </div>
      <div>
        <div className="flex flex-col text-[15px] font-semibold text-white ml-[4rem]">
          <h2 className="mb-[30px]"><FontAwesomeIcon className="text-[#2A00B7] text-[20px] bg-white relative right-[17px] top-[4.5px] rounded-md px-[5px] py-[5px]" icon={faChartBar} /><Link>Performance</Link></h2>
          <h2 className="mb-[30px]"><FontAwesomeIcon className="text-[#2A00B7] text-[20px] bg-white relative right-[17px] top-[4.5px] rounded-md px-[5px] py-[5px]" icon={faBook} /><Link>Courses</Link></h2>
          <h2 className="mb-[30px]"><FontAwesomeIcon className="text-[#2A00B7] text-[20px] bg-white relative right-[17px] top-[4.5px] rounded-md px-[5px] py-[5px]" icon={faComment} /><Link>Comment</Link></h2>
          <h2 className="mb-[30px]"><FontAwesomeIcon className="text-[#2A00B7] text-[20px] bg-white relative right-[17px] top-[4.5px] rounded-md px-[5px] py-[5px]" icon={faTools} /><Link>Tools</Link></h2>
          <h2 className="mb-[30px]"><FontAwesomeIcon className="text-[#2A00B7] text-[20px] bg-white relative right-[17px] top-[4.5px] rounded-md px-[5px] py-[5px]" icon={faCompass} /><Link>Resources</Link></h2>
        </div>
      </div>
      <div className=" w-[9rem] h-[9rem] rounded-2xl ml-[3rem] mt-[5.5rem] bg-white px-[10px] mb-[4rem]">
        <h2 className="relative left-[0.8rem] top-[2rem] ">Upgrade your plan, <Link className="underline font-semibold ">Pro Plan</Link><FontAwesomeIcon className="text-[#2A00B7] text-[20px] bg-white relative right-[17px] top-[4.5px] rounded-md px-[5px] py-[5px] ml-[3rem]" icon={faArrowRight} /></h2>
        <img src="" />
      </div>
    </div>
  );
};


export default CoursePane