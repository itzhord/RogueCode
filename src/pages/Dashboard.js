import CoursePane from "../components/CoursePane"
import ActivityPane from "../components/ActivityPane"
import ProgressPane from "../components/ProgressPane"

const Dashboard = () =>{
    return(
        <div className="w-[100] flex flex-row gap-[10px] bg-gray-300  ">
         <CoursePane/>   
         <ActivityPane/>   
         <ProgressPane/>   
        </div>
    )
}

export default Dashboard