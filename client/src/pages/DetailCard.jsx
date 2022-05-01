import styled from "styled-components";
import allProjects from "../db";


function ShowAllProjects(){
    
    return (
        <>
            <h1>Projects List</h1>
            <Container> 
                { allProjects.map((project) => 
                    <ProjectCard key={project.ID}>
                        <p>Project ID: {project.ID}</p>
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <p>Employee: {project.employee_name} Epmloyee lork-hours: {project.work_hours}</p>
                        <p>Start date: {project.start_date} End date: {project.end_date}</p>
                        <p>Sum of work-hours: {project.sum_hours}</p>
                     </ProjectCard>
                )}  
            </Container> 
        </ >    
    )
}    

export default ShowAllProjects


const ProjectCard = styled.li`
    text-align: center ;
    border: 2px solid green;
    border-radius: 5px;
    color: #489CB7;
    list-style-type: none;
    margin: 1em 0;
    padding-right: 1%;
`

const Container = styled.ul`
    padding-left: 0;
`
