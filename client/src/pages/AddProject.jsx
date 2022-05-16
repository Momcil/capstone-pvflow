import { useState } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import BackToProjectList from '../components/NavToProjectListButton'




function AddProject({addNewPr}){
    const [ID, setId] = useState("")
        console.log(ID)
    const [project_name, setProjectName] = useState("")
    const [client, setClient] = useState("")
    const [employee_name, setEmployeeNmae] = useState("")
    // const [work_hours, setWorkHours] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")

    // const [sum_hours, setSumHours] = useState([])

    
    return(
        <>
            <NewProject onSubmit={(event) => {event.preventDefault(); addNewPr({event, ID, project_name, client, employee_name, start_date, end_date})}}>
                <h1>Create new project</h1>
                <label htmlFor="id">ID: {ID}</label>
                <input type="number"
                    id="id"
                    name="id"
                    placeholder="insert project id"
                    required
                    value={ID}
                    onChange={(event) => {
                        setId(event.target.value)
                    }}>
                </input>
                <label htmlFor="project_name">Project name: {project_name}</label>
                <input type="text"
                    id="project_name"
                    name="project_name"
                    placeholder="insert project name"
                    required
                    value={project_name}
                    onChange={(event) =>{
                        setProjectName(event.target.value)
                    }}>
                </input>
                <label htmlFor="client">Client: {client}</label>
                <input type="text"
                    id="client"
                    name="client"
                    placeholder="insert client name"
                    required
                    value={client}
                    onChange={(event) =>{
                        setClient(event.target.value)
                    }}>
                </input>
                <label htmlFor="employee_name">Employee: {employee_name}</label>
                <input type="text"
                    id="employee_name"
                    name="employee_name"
                    placeholder="insert employee name"
                    required
                    value={employee_name}
                    onChange={(event) =>{
                        setEmployeeNmae(event.target.value)
                    }}>
                </input>
                <label htmlFor="start_date">Start date: {start_date}</label>
                <input type="date"
                    id="start_date"
                    name="start_date"
                    placeholder="insert start date"
                    required
                    value={start_date}
                    onChange={(event) =>{
                        setStartDate(event.target.value)
                    }}>
                </input>
                <label htmlFor="end_date">End date: {end_date}</label>
                <input type="date"
                    id="end_date"
                    name="end_date"
                    placeholder="insert end date"
                    required
                    value={end_date}
                    onChange={(event) =>{
                        setEndDate(event.target.value)
                    }}>
                </input>
                <button>create new project</button> 
                <Link to="/allProjects"><BackToProjectList>back to projectlist</BackToProjectList></Link>
         
            </NewProject>
        </>
    )
}





export default AddProject

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
  
`


