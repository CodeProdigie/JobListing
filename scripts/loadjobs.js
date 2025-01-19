
const joblist=document.querySelector(".job-section .jobs");

// Load all jobs

jobs.forEach((job) => {
    const sectiondiv=document.createElement("div");
    sectiondiv.classList.add("section");
    sectiondiv.innerHTML=`
      <i class="bx bxl-react"></i>
                <h2>${job.jobName}</h2>
                <p>${job.jobDescription}</p>
                <div class="salary">
                    <h3 class="duration">${job.durationOfWork}</h3>
                    <h3 class="pay">$${job.salaryPerHour}/hr</h3>
                </div>
                <button>Apply Now</button>
    `
    joblist.appendChild(sectiondiv)
})

// Load the sidebar menus

const menubtn = document.querySelector(".menubar");
const container = document.querySelector(".container")
menubtn.addEventListener("click", ()=> {
    container.classList.toggle("open-nav")
    menubtn.classList.toggle("bx-x");
})

// Try applying for a job



const applybtn = document.querySelectorAll(".job-section .jobs .section button");

applybtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
            const logo = btn.parentElement.querySelector("i").className;
            const jobName = btn.parentElement.querySelector("h2").textContent;
            const description = btn.parentElement.querySelector("p").textContent;
            const duration = btn.parentElement.querySelector(".duration").textContent;
            const pay = btn.parentElement.querySelector(".pay").textContent;
            const container = document.querySelector(".container")

           const jobcontents = {
            logo:logo,
            jobName:jobName,
            description:description,
            duration:duration,
            pay:pay
           } 
           let jobdata=localStorage.getItem("jobdata")
        let verifydata = jobdata ? JSON.parse(jobdata) : []
        verifydata.push(jobcontents);
        localStorage.setItem("jobdata", JSON.stringify(verifydata))
        container.classList.add("open-success");
        })  
        
})


// Remove success message 

const remover_icon = document.querySelector(".close-success");

remover_icon.addEventListener("click", ()=> {
    container.classList.remove("open-success")
})

// Search for jobs

const searchbar = document.querySelector(".search input");
const contents = document.querySelectorAll(".job-section .jobs .section");

searchbar.addEventListener("keyup", ()=> {
    const searchterm = document.querySelector(".search input").value.toLowerCase();
    contents.forEach(content => {
        const jobname = content.querySelector('h2').textContent.toLowerCase();
        if(jobname.includes(searchterm)){
            content.style.display = "block"
        }else{
            content.style.display = "none"
        }
    })
})
