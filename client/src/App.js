import './App.css'
// import ShowAllProjects from './components/showAllProjects/ShowAllProjects'
import allProjects from './db'
import { useState, useEffect } from 'react'
import AddProject from './pages/AddProject'
import AllProjects from './pages/AllProjrcts'
import { Routes, Route } from 'react-router-dom'



function App() {
    const [newPr, setNewPr] = useState(allProjects)

    function NewProjectToDb({event, ID, project_name, client, status, employee_name, work_hours, start_date, end_date, sum_hours}){
        const newProjectLi = [...newPr, {ID, project_name, client, status, employee_name, work_hours, start_date, end_date, sum_hours, in_detail: false }]
        setNewPr(newProjectLi)
        console.log(newProjectLi)
    }
    console.log(newPr)
   
    return (
        
        <div className="App">
            <Routes>
                
                <Route path='/addproject' element={<AddProject addNewPr={NewProjectToDb}/>}/>
                <Route path='/allProjects' element={<AllProjects allProjects={newPr}/>}/>
            </Routes>
        </div>
    );
}

export default App;
