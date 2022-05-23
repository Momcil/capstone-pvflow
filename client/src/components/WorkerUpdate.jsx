import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import Button from "./button/ShowMoreButton";

function UpdateWorkSattus({updateINFO}){
    const [employee_name, setEmployeeNmae] = useState("")
    console.log(employee_name)
    const [working_hours, setWorkHours] = useState("")
    const [date, setDate] = useState("")
    const [project_id, setProject_Id] = useState("")


    return (
        <>
            <NewProject onSubmit={(event) => {event.preventDefault(); updateINFO({employee_name, working_hours, date, project_id})}}>
            <label htmlFor="name">Project ID:{project_id}</label>
                <input id="id"
                name="id"
                plaseholder="insert project ID"
                value={project_id}
                onChange={(event) => {
                    setProject_Id(event.target.value)
                }}
                > 
                </input>
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
                <label htmlFor="name">Work hours:{working_hours}</label>
                <input id="hours"
                name="hours"
                plaseholder="insert work hours"
                value={working_hours}
                onChange={(event) => {
                    setWorkHours(event.target.value)
                }}
                > 
                </input>
                <Button>submit</Button>
                <Link to="/" className='logout'>log out</Link>
            </NewProject>
        </>
    )
}


export default UpdateWorkSattus


const NewProject = styled.form`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    background-color: white;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
    input {
    height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .logout{
    background-color: #351c47;
    color: white;
    margin-bottom: 1em;
    font-size: 1.2rem;
    padding : 0.1em;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    input{
        text-align: center ;
    border: 2px solid #489CB7;
    border-radius: 5px;
    color: #489CB7;
    margin: 1em 0;
    padding-right: 1%;
    list-style-type: none;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`