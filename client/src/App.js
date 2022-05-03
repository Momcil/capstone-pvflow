import './App.css';
import ShowAllProjects from './components/ShowAllProjects';
import allProjects from './db';


function App() {

    return (
        <div className="App">
            <ShowAllProjects  allProjects= {allProjects}/>
        </div>
    );
}

export default App;
