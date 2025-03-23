// Toggle the Registration Form

const holder = document.querySelector(".holder");
const togglebuttons = document.querySelectorAll(".forms .bottom span a");

togglebuttons.forEach(butt => {
    butt.addEventListener("click", (e)=>{
        e.preventDefault()
        holder.classList.toggle("active")
    })
})


// Register users to the Admin Dashboard


const RegisterBtn = document.querySelector(".register button");

RegisterBtn.addEventListener("click", ()=> {
const userName = document.querySelector(".register .username").value;
const email = document.querySelector(".register .email").value;
const password = document.querySelector(".register .password").value;
    const Users = localStorage.getItem("users");
    const parsedUsers = Users ? JSON.parse(Users) : [];

    const registeredUsers ={
        userName,email,password
    }
    parsedUsers.push(registeredUsers);
    localStorage.setItem("users", JSON.stringify(parsedUsers));
    document.querySelector(".username").value = ''
    document.querySelector(".email").value = ''
    document.querySelector(".password").value = ''
    alert("Registration Successful")
    // window.location.href ='../'
})


// Login User

const LoginBtn = document.querySelector(".login button");

LoginBtn.addEventListener("click", ()=> {
    const Users = JSON.parse(localStorage.getItem("users"));

    Users.forEach(user => {
    const email = document.querySelector(".login .email").value;
    const password = document.querySelector(".login .password").value;
         if(user.email == email && user.password == password){
            alert("Welcome back");
            window.location.href = "../"
         }
    })
})

