import { Link } from "react-router-dom"
import Email from "../assets/email.png"
import { useParams } from "react-router-dom"

const Regsuccess = (props) =>{
    const email = props.email

    return(
        <div>
        <Link
          to="/"
          className="relative top-1.5 left-[85rem] bg-transparent border border-orange-900 text-orange-900 hover:border-orange-900 hover:text-white hover:bg-orange-900 text-[10px] py-1 px-5 rounded-2xl"
        >
          Homepage
        </Link>
        <div className="w-[100] h-[21.6vh] "></div>
        <div className="w-[100] h-[75vh] bg-orange-900">
        <div className="w-100 h-[15vh] bg-orange-900">
          <div className="relative bottom-[5rem] ml-[30%] flex flex-col w-[40%] h-[75vh]">
          <div className="w-100 h-[15vh] bg-orange-900">
            <div className=" font-sans font-bold ml-[2rem] text-white">
              <h1 className="text-[2.5rem] mt-5 ml-[6rem]">Check your email</h1>
            </div>
            <div className="w-100 h-[55vh] bg-white">
                <img className="w-[8rem] relative top-[4rem] ml-[15rem]" src={Email} alt="Email Icon"/>
                <div className="relative text-[20px] text-center text-orange-900 font-bold top-[7rem]">
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
    )
}
export default Regsuccess