import UpdateWorkSattus from "../components/WorkerUpdate"
import { Link } from "react-router-dom"

function UpdateStatus(AddWorkersInformation){

    return (
        <>
            <UpdateWorkSattus update={AddWorkersInformation}/>
            <Link to="/allProjects">log out</Link>
        </>
    )
    
}

export default UpdateStatus