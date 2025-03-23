
// Load all Registered users 

document.addEventListener("DOMContentLoaded", ()=> {
    const Allusers = JSON.parse(localStorage.getItem("users"));
    const Tableusers = document.querySelector("table tbody")
     Allusers.forEach(user => {
        const newElement = document.createElement("tr");
        newElement.innerHTML = `
                <td>${user.userName}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>  
        `
        Tableusers.appendChild(newElement);
     })
})