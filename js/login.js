var loginEmail = document.querySelector(".loginEmail");
var loginPassword = document.querySelector(".loginPassword");
var logIn = document.querySelector(".logIn");
var signinMessage = document.querySelector(".signinMessage");
var arrofInputVAlues = [];
if(localStorage.getItem("arrofInputVAlues")){
  arrofInputVAlues = JSON.parse(localStorage.getItem("arrofInputVAlues"));
}
// check email and password is exist or not by for loop on arr
logIn.addEventListener("click",function(e){
  e.preventDefault();
  if(arrofInputVAlues.length == 0){
    signinMessage.classList.remove("d-none");
  }
  else{
    for(var i = 0;i<arrofInputVAlues.length;i++){
      if(arrofInputVAlues[i].email === loginEmail.value && arrofInputVAlues[i].password === loginPassword.value){
        signinMessage.classList.add("d-none");
        localStorage.setItem("userName",arrofInputVAlues[i].name)
        location.replace("./home.html");   
        localStorage.setItem("login","true");
      }else{
           signinMessage.classList.remove("d-none");
      }
    }
  }

})


