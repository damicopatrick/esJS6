const utenti= ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password= ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];
function InputLogin(){
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPassword").value;
    let loginSuccess = document.getElementById("loginSuccess");
    let loginFailed = document.getElementById("loginFailed");
    if(utenti.includes(user)){
        const i = utenti.indexOf(user);
        if(password[i] == pass){
            loginSuccess.classList.remove("puff");
            loginFailed.classList.add("puff")
        }
        else{
            loginSuccess.classList.add("puff");
            loginFailed.classList.remove("puff")
        }
    }
    else{
        loginSuccess.classList.add("puff");
        loginFailed.classList.remove("puff")
    }
}

function occhio(){
    let occhioToggle = document.getElementById("occhioToggle");
    let pass = document.getElementById("newPassword");
    occhioToggle.classList.toggle("bi-eye-slash");
    occhioToggle.classList.toggle("bi-eye");
    if(pass.type == "text"){
        pass.type = "password";
    }
    else{
        pass.type = "text";
    }
}
