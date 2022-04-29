

const AllProjects = [
    {
        ID: 1,
        project_name: "1st Project",
        client: "1st Client",
        status: "In progress",
        employee_name: "Anton",
        work_hours: 5, 
        start_date: "10-01_22",
        end_date: "10-02-22",
        sum_hours:5,
        in_detail: false
    },
    {
        ID: 2,
        project_name: "2nd Project",
        client: "2nd Client",
        status: "In progress",
        employee_name: ["Petter"],
        work_hours: [2], 
        start_date: "10-01_22",
        end_date: "10-02-22",
        sum_hours:20,
        in_detail: false
    },
    {
        ID: 3,
        project_name: "1st Project",
        client: "3rd Client",
        status: "Done",
        employee_name: "Anton",
        work_hours: 5, 
        start_date: "10-01_22",
        end_date: "10-02-22",
        sum_hours:10,
        in_detail: false
    }
]

function ShowAllProjects(){
    
    return (
        <>
            <h1>Projects List</h1>
            {AllProjects.map((project) => 
                <ul>
                    <li key={project.ID}>
                        <p>Project ID: {project.ID}</p>
                        <p>Client: {project.client}</p>
                        <p>Status: {project.status}</p>
                        <p>Employee: {project.employee_name} --> Epmloyee lork-hours: {project.work_hours}</p>
                        <p>Start date: {project.start_date} End date: {project.end_date}</p>
                        <p>Sum of work-hours: {project.sum_hours}</p>
                    </li>
                </ul>

            )}     
        </>
    )
}    

export default ShowAllProjects