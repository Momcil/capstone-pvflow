import { Link } from "react-router-dom";
import ShowAllProjects from "../components/showAllProjects/ShowAllProjects";
import styled from "styled-components";
import ShowMoreButton from "../components/button/ShowMoreButton"


const AllProjects = ({allProjects, deleteProject}) => {
    return (
        <Container>
            <Link to='/update'><ShowMoreButton className="addprojectbtn">update</ShowMoreButton></Link>
            <Link to='/addproject'><ShowMoreButton className="addprojectbtn">add new project</ShowMoreButton></Link>
            <ShowAllProjects allProjects={allProjects} deleteProject={deleteProject} />
        </Container>
    )
}

export default AllProjects

const Container = styled.div`
    text-align: center;
    margin-top: 1em ;
`
    
