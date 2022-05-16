import styled from "styled-components";
import { useState } from "react";
import ShowMoreButton from "../button/ShowMoreButton";




export default function ShowAllProjects({allProjects, deleteProject}){
    const [details, setDetails] = useState([])

    function Toggle(projectID) {
        const newDetails = [...allProjects]
        newDetails[projectID].in_detail = newDetails[projectID].in_detail ? false : true
        setDetails(newDetails)
    }

    
 
    return (
        <>
            <h1>Projects List</h1>
            <Container> 
                {allProjects.map((project, index) =>    
                    project.in_detail ?            
                    <ProjectCard role="list" key={index}>
                        <p>Project ID: {project.ID}</p>
                        <button onClick={() => deleteProject(project)}>DELETE PROJECT</button>
                        <p>Project name: {project.project_name}</p>
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <p>Employee: {project.employee_name} / lork-hours: <span>{project.work_hours}</span></p>
                        <p>Start date: {project.start_date}</p>
                        <p> End date: {project.end_date}</p>
                        <p>Sum of work-hours: <span>{project.sum_hours}</span></p>
                        <ShowMoreButton id={project.ID} onClick={() => Toggle(index)}>
                                {project.in_detail ? "close" : "show more"}
                        </ShowMoreButton>
                    </ProjectCard> 
                    :
                    <ProjectCard role="list" key={index}>
                        <p>Project ID: {project.ID}</p> 
                        <p>Project name: {project.project_name}</p>
                        {/* <button onClick={() => deleteProject(project)}>delete</button> */}
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <ShowMoreButton id={project.ID} onClick={() => Toggle(index)}>
                                {project.in_detail ? "close" : "show more"}
                        </ShowMoreButton>
                    </ProjectCard> 
                )}  
            </Container> 
        </>    
    )
}    




const ProjectCard = styled.li`
    text-align: center ;
    border: 2px solid #489CB7;
    border-radius: 5px;
    color: #489CB7;
    margin: 1em 0;
    padding-right: 1%;
    list-style-type: none;
    span{
        border: 2px solid green;
        padding: 0.2em ;
        font-size: 1.2rem ;
    }
    button{
        font-size: 1.2rem;
    }
`

const Container = styled.ul`
    padding-left: 0;
`
