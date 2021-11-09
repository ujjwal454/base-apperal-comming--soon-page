const form = document.querySelector(".container form");
const email = document.querySelector('.container form input[type = email]');
form.addEventListener("submit",function(e){
    e.preventDefault();
    let emailvalue = email.value;
    if(validateEmail(emailvalue)){
        form.classList.remove("error");
    }
    else{
       form.classList.add("error");
    }
})
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}