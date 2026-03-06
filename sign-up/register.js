function signup(){
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("toyUserEmail", email);
    localStorage.setItem("toyUserPassword", password);

    alert("Account Created Successfully 🎉");
    showLogin();
}