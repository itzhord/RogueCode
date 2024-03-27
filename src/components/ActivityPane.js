import {
  faPlus,
  faArrowRight,
  faArrowLeft,
  faToggleOn,
  faPersonWalking,faComputer,faLaptop,faFaceGrin
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivityPane = () => {
  return (
    <div className="w-2/5 pl-[4rem] pr-[5rem]  bg-slate-200 rounded-3xl mt-[0.5rem] ">
      <div className="mt-[3rem] mb-[2rem] flex flex-row gap-[10rem] ">
        <div>
          <h1 className="font-bold font-serif text-[20px] ">Course Activity</h1>
          <h3 className="text-[15px] font-semibold">June 28th,2024</h3>
        </div>
        <div>
          <h2>
            <FontAwesomeIcon
              className="text-white relative bg-[#2A00B7] px-[0.6rem] py-[1rem] bottom-[0.2rem] left-[7.5rem] rounded-xl text-[20px]"
              icon={faPlus}
            />
          </h2>
        </div>
      </div>
      <div className="mb-[1rem] flex flex-row ">
        <h2> Courses</h2>
        <h2>
          <FontAwesomeIcon
            className="text-[#2A00B7] relative bg-white rounded-sm ml-[2rem] px-[4px] py-[3px] text-[15px]"
            icon={faArrowLeft}
          />
        </h2>
        <h2>
          <FontAwesomeIcon
            className="text-[#2A00B7] relative bg-white rounded-sm ml-[0.8rem] px-[4px] py-[3px] text-[15px]"
            icon={faArrowRight}
          />
        </h2>
        <h2>
          <FontAwesomeIcon
            className="text-[#2A00B7] relative rounded-sm ml-[17rem] left-[1.6rem] bottom-[0.3rem] px-[4px] py-[3px] text-[20px]"
            icon={faToggleOn}
          />
        </h2>
      </div>
      <div className="w-[30rem] flex flex-col h-[11rem] bg-blue-600 rounded-[1.5rem] ">
        <div className="flex flex-row">
        <div className="flex flex-row gap-[3rem] pt-[1.5rem]">
          <div>
            <h2>
              <FontAwesomeIcon
                className="text-white  ml-[2.2rem] relative rounded-sm bottom-[0.3rem] px-[4px] py-[3px] text-[5rem]"
                icon={faPersonWalking}
              />
            </h2>
          </div>
          <div className="flex flex-col ml-[2.2rem] font-semibold text-white">
            <h2 className="">Start your react </h2>
            <h2 className="mt-[-0.3rem]">Journey Here</h2>
            <p className="text-[13px] mt-[0.5rem] mb-[-0.3rem]">
              Follow these easy and
            </p>
            <p className="text-[13px]">simple steps</p>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="w-[4rem] h-[4rem] bg-white rounded-2xl ">
                <h2 className="text-[2rem] relative top-[0.5rem] left-[0.7rem]">
                  12
                </h2>
              </div>
              <h2 className="text-white font-semibold">Enrolled</h2>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="flex flex-row text-white font-semibold justify-between px-[3rem] mt-[1.5rem] ">
            <div className="w-[65%] h-[0.3rem] mt-[0.5rem] bg-white rounded-xl"></div>
            <h2 className="relative right-[2rem]">Enroll</h2>
          </div>
        </div>
      </div>
      <div className="w-[30rem] flex flex-col mt-[0.8rem] h-[11rem] bg-yellow-600 rounded-[1.5rem] ">
        <div className="flex flex-row">
        <div className="flex flex-row gap-[3rem] pt-[1.5rem]">
          <div>
            <h2>
              <FontAwesomeIcon
                className="text-white  ml-[2.2rem] relative rounded-sm bottom-[0.3rem] px-[4px] py-[3px] text-[5rem]"
                icon={faComputer}
              />
            </h2>
          </div>
          <div className="flex flex-col ml-[-1.2rem] font-semibold text-white">
            <h2 className="">Grow Your React  </h2>
            <h2 className="mt-[-0.3rem]">Skills, Intermediate</h2>
            <p className="text-[13px] mt-[0.5rem] mb-[-0.3rem]">
              Follow these easy and
            </p>
            <p className="text-[13px]">simple steps</p>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="w-[4rem] h-[4rem] bg-white rounded-2xl ">
                <h2 className="text-[2rem] relative top-[0.5rem] left-[0.7rem]">
                  28
                </h2>
              </div>
              <h2 className="text-white font-semibold">Enrolled</h2>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="flex flex-row text-white font-semibold justify-between px-[3rem] mt-[1.5rem] ">
            <div className="w-[65%] h-[0.3rem] mt-[0.5rem] bg-white rounded-xl"></div>
            <h2 className="relative right-[2rem]">Enroll</h2>
          </div>
        </div>
      </div>
      <div className="w-[30rem] flex flex-col h-[11rem] mt-[0.8rem] bg-green-600 rounded-[1.5rem] ">
        <div className="flex flex-row">
        <div className="flex flex-row gap-[3rem] pt-[1.5rem]">
          <div>
            <h2>
              <FontAwesomeIcon
                className="text-white  ml-[2.2rem] relative rounded-sm bottom-[0.3rem] px-[4px] py-[3px] text-[5rem]"
                icon={faLaptop}
              />
            </h2>
          </div>
          <div className="flex flex-col ml-[-1.2rem] font-semibold text-white">
            <h2 className="">Become React </h2>
            <h2 className="mt-[-0.3rem]">Master, Click here</h2>
            <p className="text-[13px] mt-[0.5rem] mb-[-0.3rem]">
              Follow these easy and
            </p>
            <p className="text-[13px]">simple steps</p>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="w-[4rem] h-[4rem] bg-white rounded-2xl ">
                <h2 className="text-[2rem] relative top-[0.5rem] left-[0.7rem]">
                  10
                </h2>
              </div>
              <h2 className="text-white font-semibold">Enrolled</h2>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="flex flex-row text-white font-semibold justify-between px-[3rem] mt-[1.5rem] ">
            <div className="w-[65%] h-[0.3rem] mt-[0.5rem] bg-white rounded-xl"></div>
            <h2 className="relative right-[2rem]">Enroll</h2>
          </div>
        </div>
      </div>
      <div className="w-[30rem] flex flex-col h-[11rem] mt-[0.8rem] bg-purple-600 rounded-[1.5rem] mb-[2rem]">
        <div className="flex flex-row">
        <div className="flex flex-row gap-[3rem] pt-[1.5rem]">
          <div>
            <h2>
              <FontAwesomeIcon
                className="text-white  ml-[2.2rem] relative rounded-sm bottom-[0.3rem] px-[4px] py-[3px] text-[5rem]"
                icon={faFaceGrin}
              />
            </h2>
          </div>
          <div className="flex flex-col font-semibold text-white">
            <h2 className="">React as Career</h2>
            <h2 className="mt-[-0.3rem]">Full developer</h2>
            <p className="text-[13px] mt-[0.5rem] mb-[-0.3rem]">
              Follow these easy and
            </p>
            <p className="text-[13px]">simple steps</p>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="w-[4rem] h-[4rem] bg-white rounded-2xl ">
                <h2 className="text-[2rem] relative top-[0.5rem] left-[0.7rem]">
                  19
                </h2>
              </div>
              <h2 className="text-white font-semibold">Enrolled</h2>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="flex flex-row text-white font-semibold justify-between px-[3rem] mt-[1.5rem] ">
            <div className="w-[65%] h-[0.3rem] mt-[0.5rem] bg-white rounded-xl"></div>
            <h2 className="relative right-[2rem]">Enroll</h2>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ActivityPane;
