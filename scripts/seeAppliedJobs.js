
// See all Applied Jobs on dashboard

document.addEventListener("DOMContentLoaded", () => {
    const loadJobs = JSON.parse(localStorage.getItem("jobdata"));
    loadJobs.forEach(loadedJobs => {
        const AppliedJob = document.querySelector(".applied-jobs tbody");
        const newElement = document.createElement("tr");
        newElement.innerHTML = `
                  <td class="jobName">${loadedJobs.jobName}</td>
                        <td>${loadedJobs.duration}</td>
                        <td>${loadedJobs.pay}</td>
                        <td class="pending">${loadedJobs.status}</td>
                        <td>
                            <span class="approve">validate <i class="bx bx-check"></i></span>
                            <span class="reject">Reject <i class="bx bx-trash"></i></span>
                        </td>
         `
        AppliedJob.appendChild(newElement);

        const approve = document.querySelectorAll(".approve");
        const reject = document.querySelectorAll(".reject");

        approve.forEach(approveBtn => {
            approveBtn.addEventListener("click", (event) => {
                const parentElement = event.target.closest("tr");
                if (!parentElement) return; // Prevents errors if no parent <tr> exists

                let pendingChange = parentElement.querySelector(".pending");
                let parentJobName = parentElement.querySelector(".jobName");

                if (pendingChange && parentJobName) {
                    pendingChange.textContent = "Approved";

                    // Ensure textContent is used for comparison
                    const jobNameText = parentJobName.textContent.trim();
                    const jobIndex = loadJobs.findIndex(job => job.jobName === jobNameText);

                    if (jobIndex !== -1) {
                        loadJobs[jobIndex].status = "Approved";
                        localStorage.setItem("jobdata", JSON.stringify(loadJobs));
                    } else {
                        console.error("Job not found in loadJobs:", jobNameText);
                    }
                }
            });
        });
        reject.forEach(rejectBtn => {
            rejectBtn.addEventListener("click", (event) => {
                const parentElement = event.target.closest("tr");
                if (!parentElement) return; // Prevents errors if no parent <tr> exists

                let pendingChange = parentElement.querySelector(".pending");
                let parentJobName = parentElement.querySelector(".jobName");

                if (pendingChange && parentJobName) {
                    pendingChange.textContent = "Rejected";

                    // Ensure textContent is used for comparison
                    const jobNameText = parentJobName.textContent.trim();
                    const jobIndex = loadJobs.findIndex(job => job.jobName === jobNameText);

                    if (jobIndex !== -1) {
                        loadJobs[jobIndex].status = "Rejected";
                        localStorage.setItem("jobdata", JSON.stringify(loadJobs));
                    } else {
                        console.error("Job not found in loadJobs:", jobNameText);
                    }
                }
            });
        });


    })
})


// approve.forEach(approveBtn => {
//     approveBtn.addEventListener("click", (event)=> {
//           const parentElement = event.target.closest("tr") ;
//           let pendingChange = parentElement.querySelector(".pending");
//           let parentJobName = parentElement.querySelector(".jobName");
//           pendingChange.textContent="Approved";
//           const JobIndex = loadJobs.findIndex(job => job.jobName === parentJobName)
//           loadJobs[JobIndex].status="Approved";
//           localStorage.setItem("jobdata",JSON.stringify(loadJobs));
//     })
//  })