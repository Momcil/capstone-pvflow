import styled from "styled-components";
import { useState } from "react";
import MyButton from "./button/MyButton";



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
                        <MyButton id={project.ID} onClick={() => Toggle(project.ID - 1)}>
                                {project.in_detail ? "close" : "show more"}
                        </MyButton>
                    </ProjectCard> 
                    :
                    <ProjectCard role="list" key={project.ID}>
                        <p>Project ID: {project.ID}</p> 
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <MyButton id={project.ID} onClick={() => Toggle(project.ID - 1)}>
                                {project.in_detail ? "close" : "show more"}
                        </MyButton>
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
    }
`

const Container = styled.ul`
    padding-left: 0;
`
