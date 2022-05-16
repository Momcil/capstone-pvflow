import { Link } from 'react-router-dom'
import { useState } from 'react'


function UpdateWorkSattus({update}){
    const [employee_name, setEmployeeNmae] = useState([])
    console.log(employee_name)
    const [work_hours, setWorkHours] = useState([])


    return (
        <>
            <form onSubmit={(event) => {event.preventDefault(); update({employee_name, work_hours})} }>
                <label htmlFor="name">Add your name:{employee_name}</label>
                <input id="name"
                name="name"
                plaseholder="insert name"
                value={employee_name}
                onChange={(event) => {
                    setEmployeeNmae(event.target.value)
                }}
                > 
                </input>
                <button>submit</button>
            </form>
            <Link to="/">log out</Link>
        </>
    )


}


export default UpdateWorkSattus