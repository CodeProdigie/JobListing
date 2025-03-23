
// Create Jobs

document.addEventListener("DOMContentLoaded",()=>{

    const presentJobs = localStorage.getItem("allJobs");
    const parseJobs = presentJobs ? JSON.parse(presentJobs) : []
    const CreateJobs = document.querySelector(".middle button")
     CreateJobs.addEventListener("click", ()=> {
        const JobTitle = document.querySelector(".job-title").value;
const JobDescription = document.querySelector(".description").value;
const JobType = document.querySelector(".job-type").value;
const JobSalary = document.querySelector(".salary").value;
        let JobsArray = {JobTitle,JobDescription,JobType,JobSalary};
        parseJobs.push(JobsArray);
        localStorage.setItem("allJobs",JSON.stringify(parseJobs));
            alert("Job created");
     })
})
