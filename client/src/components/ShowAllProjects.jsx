import styled from "styled-components";



function ShowAllProjects({allProjects}){
    
    return (
        <>
            <h1>Projects List</h1>
            <Container> 
                {allProjects.map((project) => 
                    <ProjectCard role="list" key={project.ID}>
                        <p>Project ID: {project.ID}</p>
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <p>Employee: {project.employee_name} <span>Epmloyee lork-hours: {project.work_hours}</span></p>
                        <p>Start date: {project.start_date}</p>
                        <p> End date: {project.end_date}</p>
                        <p>Sum of work-hours: <span>{project.sum_hours}</span></p>
                    </ProjectCard>
                )}  
            </Container> 
        </>    
    )
}    

export default ShowAllProjects


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
