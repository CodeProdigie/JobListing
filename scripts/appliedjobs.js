// Load the sidebar menus

const menubtn = document.querySelector(".menubar");
const container = document.querySelector(".container")
menubtn.addEventListener("click", ()=> {
    container.classList.toggle("open-nav")
    menubtn.classList.toggle("bx-x");
})

window.onload = () => {
    const loadappliedjobs= localStorage.getItem("jobdata");
    const parsejobs = JSON.parse(loadappliedjobs);
        LoadJobs(parsejobs);
}

const LoadJobs = (AppliedJobs) => {
    AppliedJobs.map((job) => {
        const joblist=document.querySelector(".job-section .jobs");
        const sectiondiv=document.createElement("div");
    sectiondiv.classList.add("section");
    sectiondiv.innerHTML=`
      <i class="bx bxl-react"></i>
                <h2>${job.jobName}</h2>
                <p>${job.description}</p>
                <div class="salary">
                    <h3 class="duration">${job.duration}</h3>
                    <h3 class="pay">${job.pay}</h3>
                </div>
                <span>Pending</span>
    `
    joblist.appendChild(sectiondiv)
    })
}