const btn = document.querySelector(".btn");
const fName = document.querySelector(".firstName");
const lName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const PW = document.querySelector(".password");
const err_fName = document.querySelector(".error_fName");
const err_lName = document.querySelector(".error_lName");
const err_email = document.querySelector(".error_email");
const err_PW = document.querySelector(".error_password");

btn.addEventListener("click", (e)=>{
    e.preventDefault(); //阻止 a 標籤默認行為，所以不會轉址

    if(fName.value === ""){
        err_fName.textContent = "First Name cannnot be empty";
        fName.classList.add("error-input");
        fName.classList.add("placeholder-image");
        fName.placeholder = "";
        
    }else{
        err_fName.textContent = "";
        fName.classList.remove("error-input");
        fName.classList.remove("placeholder-image");
    };

    if(lName.value === ""){
        err_lName.textContent = "Last Name cannnot be empty";
        lName.classList.add("error-input");
        lName.classList.add("placeholder-image");
        lName.placeholder = "";
    }else{
        err_lName.textContent = "";
        lName.classList.remove("error-input");
        lName.classList.remove("placeholder-image");
    };

    const emailPattern = /^[a-zA-Z0-9._-]+@.+\.com$/;

    if(email.value === ""){
        err_email.textContent = "Looks like this is not an email";
        email.classList.add("error-input");
        email.classList.add("placeholder-image");
        email.placeholder = "email@mail.com";
    }else if(!emailPattern.test(email.value)) {
        err_email.textContent = "Looks like this is not an email";
        email.classList.add("error-input");
        email.classList.add("placeholder-image");
        email.placeholder = "email@mail.com";
        email.value = "";
    }else{
        err_email.textContent = "";
        email.classList.remove("error-input");
        email.classList.remove("placeholder-image");
    };

    if(PW.value === ""){
        err_PW.textContent = "Password cannnot be empty";
        PW.classList.add("error-input");
        PW.classList.add("placeholder-image");
        PW.placeholder = "";
    }else{
        err_PW.textContent = "";
        PW.classList.remove("error-input");
        PW.classList.remove("placeholder-image");
    };

    if(fName.value !== "" && lName.value !== "" && email.value !== "" && PW.value !== ""){
        alert("Successfully submitted");
    };

})