import UpdateWorkSattus from "../components/WorkerUpdate"
import { Link } from "react-router-dom"

function UpdateStatus({updateINFO}){

    return (
        <>
            <UpdateWorkSattus updateINFO={updateINFO}/>
            <Link to="/">log out</Link>
        </>
    )
    
}

export default UpdateStatus