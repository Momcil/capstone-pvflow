import { Link } from "react-router-dom";
import ShowAllProjects from "../components/showAllProjects/ShowAllProjects";
import styled from "styled-components";
import ShowMoreButton from "../components/button/ShowMoreButton"


const AllProjects = ({allProjects, deleteProject}) => {
    return (
        <Container>
            <h1>pv-flow</h1>
            <div>
                <Link to='/update'><ShowMoreButton className="addprojectbtn">update</ShowMoreButton></Link>
                <Link to='/addproject'><ShowMoreButton className="addprojectbtn">add new project</ShowMoreButton></Link>
            </div>
            <ShowAllProjects allProjects={allProjects} deleteProject={deleteProject} />
        </Container>
    )
}

export default AllProjects

const Container = styled.div`
    text-align: center;
    margin-top: 1em ;
    font-family: sans-serif;
    div{
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        margin-top: 2em ;
    }
    h1{
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
        padding: 1em;
        font-size: 2.5rem;
        border: 2px solid #489CB7;
        border-radius: 5px;
    }
`

    
