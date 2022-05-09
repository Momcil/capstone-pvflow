import { Link } from "react-router-dom";
import ShowAllProjects from "../components/showAllProjects/ShowAllProjects";
import styled from "styled-components";
import AddProject from "./AddProject";

const AllProjects = ({allProjects}) => {
    return (
        <Container>
            <Link to='/addproject'><button>add new project</button></Link>
            <ShowAllProjects allProjects={allProjects}/>
        </Container>
    )
}

export default AllProjects

const Container = styled.div`
    text-align: center;

    button {
        margin-top: 2em ;
    }
`
    