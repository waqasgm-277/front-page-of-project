function login(){
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("toyUserEmail");
    let savedPassword = localStorage.getItem("toyUserPassword");

    if(email === savedEmail && password === savedPassword){
        alert("Welcome to ToyTown 🧸✨");
        window.location.href = "index.html"; // redirect to homepage
    } else {
        alert("Invalid Email or Password");
    }
}