import styled from "styled-components";
import { useState } from "react";


export default function ShowAllProjects({allProjects}){
    const [details, setDetails] = useState([])

    function Toggle(projectID){
        const newDetails = [...allProjects]
        newDetails[projectID].in_detail = newDetails[projectID].in_detail ? false : true
        setDetails(newDetails)
        console.log(newDetails)
    }
 
    return (
        <>
            <h1>Projects List</h1>
            <Container> 
                {allProjects.map((project) =>    
                    project.in_detail ?            
                    <ProjectCard role="list" key={project.ID}>
                        <p>Project ID: {project.ID}</p>
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <p>Employee: {project.employee_name} <span>Epmloyee lork-hours: {project.work_hours}</span></p>
                        <p>Start date: {project.start_date}</p>
                        <p> End date: {project.end_date}</p>
                        <p>Sum of work-hours: <span>{project.sum_hours}</span></p>
                        <button className="btn" id={project.ID} onClick={() => Toggle(project.ID - 1)}>
                                {project.hasDetails ? "close" : "show more"}
                        </button>
                    </ProjectCard> 
                    :
                    <ProjectCard role="list" key={project.ID}>
                        <p>Project ID: {project.ID}</p> 
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <button className="btn" id={project.ID} onClick={() => Toggle(project.ID - 1)}>
                            {project.hasDetails ? "close" : "show more"}
                        </button>
                    </ProjectCard> 
                )}  
            </Container> 
        </>    
    )
}    




const ProjectCard = styled.li`
    text-align: center ;
    border: 2px solid green;
    border-radius: 5px;
    color: #489CB7;
    margin: 1em 0;
    padding-right: 1%;
    list-style-type: none;
    span{
        border: 2px solid green;
    }
`

const Container = styled.ul`
    padding-left: 0;
`