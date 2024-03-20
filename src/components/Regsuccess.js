import { Link } from "react-router-dom";
import Email from "../assets/email.png";
import { useParams } from "react-router-dom";

const Regsuccess = (props) => {
  const email = props.email;

  return (
    <div>
      <Link
        to="/"
        className="relative top-1.5 left-[85rem] bg-transparent border border-[#2A00B7]  text-[#2A00B7] hover:border-[#2A00B7] hover:text-white hover:bg-[#2A00B7]  text-[10px] py-1 px-5 rounded-2xl"
      >
        {" "}
        Homepage
      </Link>
      <div className="w-[100] h-[15.6vh] "></div>
      <div className="w-[100] h-[81vh] bg-gradient-to-b from-[#2A00B7] to-[#14003a]">
        <div className="w-100 h-[10vh] bg-gradient-to-b from-[#2A00B7] to-[#14003a]">
          <div className="relative bottom-[5rem] ml-[35%] flex flex-col w-[30%] h-[75vh]">
            <div className="w-100 h-[15vh] bg-[#2A00B7]">
              <div className=" font-sans font-bold ml-[2rem] text-white">
                <h1 className="text-[2.5rem] mt-5 ml-[2.5rem]">
                  Check your email
                </h1>
              </div>
              <div className="w-100 h-[55vh] bg-white">
                <img
                  className="w-[8rem] relative top-[4rem] ml-[10rem]"
                  src={Email}
                  alt="Email Icon"
                />
                <div className="relative text-[18px] text-center text-[#2A00B7] font-bold top-[7rem]">
                  <p>Check your {email} inbox</p>
                  <p> For Instructions from us on how</p>
                  <p>to verify your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Regsuccess;
