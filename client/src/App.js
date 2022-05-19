import './App.css';
import { useState, useEffect } from 'react';
import AddProject from './pages/AddProject';
import AllProjects from './pages/AllProjrcts';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import UpdateStatus from './pages/UpdateStatus';

function App() {
    const [newProject, setNewProject] = useState([]);
    const [employee, setEmployee] = useState([]);

    console.log(employee);

    useEffect(() => {
        fetch('/allProjects')
            .then(res => res.json())
            .then(data => {
                setNewProject(data);
            });
    }, []);

    function NewProjectToDb({
        event,
        ID,
        project_name,
        client,
        status,
        employee_name,
        work_hours,
        start_date,
        end_date,
        sum_hours,
    }) {
        const newProjectList = {
            ID,
            project_name,
            client,
            status: 'In progress',
            employee_name,
            work_hours,
            start_date,
            end_date,
            sum_hours,
            in_detail: false,
        };

        fetch('/allProjects', {
            method: 'POST', // or "PUT"
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProjectList),
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setNewProject(newProject => {
                    console.log('newProject', newProject);
                    return newProject.concat(data);
                });
            });
    }

    function deleteProject(project) {
        fetch(`/allProjects/${project._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            setNewProject(newProject => {
                return newProject.filter(pr => pr._id !== project._id);
            });
        });
    }

    function AddWorkersInformation({ employee_name, working_hours, project_id, date }) {
        const updateStatus = { employee_name, working_hours, project_id, date };

        fetch('/update', {
            method: 'POST', // or "PUT"
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateStatus),
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setEmployee(updateStatus => {
                    console.log('setEmployee', updateStatus);
                    return updateStatus.concat(data);
                });
            });
    }

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/update"
                    element={<UpdateStatus updateINFO={AddWorkersInformation} />}
                />
                <Route path="/" element={<LoginPage />} />
                <Route path="/addproject" element={<AddProject addNewPr={NewProjectToDb} />} />
                <Route
                    path="/allProjects"
                    element={<AllProjects allProjects={newProject} deleteProject={deleteProject} />}
                />
            </Routes>
        </div>
    );
}

export default App;
