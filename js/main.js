var nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
var emailRegex = /^[a-z]{3,}@[a-z]{1,}\.com$/i;
var passwordRegex = /^[0-9a-z]{8,}$/i;
var signUp = document.querySelector(".signUp");
var inputNameSignUp = document.querySelector(".inputNameSignUp");
var inputEmailSignUp = document.querySelector(".inputEmailSignUp");
var inputPasswordSignUp = document.querySelector(".inputPasswordSignUp");
// Make array and stroe it in LocalStorage
var arrofInputVAlues = [];
if (localStorage.getItem("arrofInputVAlues")) {
  arrofInputVAlues = JSON.parse(localStorage.getItem("arrofInputVAlues"));
}

signUp.addEventListener("click", function (e) {
  e.preventDefault();
    if(checkRegex()){
      var inputvalues = {
        name: inputNameSignUp.value,
        email: inputEmailSignUp.value,
        password: inputPasswordSignUp.value,
      };
      arrofInputVAlues.push(inputvalues);
      localStorage.setItem("arrofInputVAlues", JSON.stringify(arrofInputVAlues));
      resetInputs();
      location.replace("./index.html");
    }
});
// fun to make regex per input and use it on event (change)
function doRegex(element, regex) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");
  }
}
// fun to reset inputs
function resetInputs(){
  inputNameSignUp.value = "";
  inputEmailSignUp.value = "";
  inputPasswordSignUp.value = "";
}
// fun to check regex is done
function checkRegex(){
  if(nameRegex.test(inputNameSignUp.value) && emailRegex.test(inputEmailSignUp.value) && passwordRegex.test(inputPasswordSignUp.value)){
    inputNameSignUp.classList.remove("is-valid","is-invalid");
    inputEmailSignUp.classList.remove("is-valid","is-invalid");
    inputPasswordSignUp.classList.remove("is-valid","is-invalid");
    return true;
  }else{
    return false;
  }
}
inputNameSignUp.addEventListener("change",function(e){
  doRegex(inputNameSignUp,nameRegex);
})
inputEmailSignUp.addEventListener("change",function(e){
  doRegex(inputEmailSignUp,emailRegex);
})
inputPasswordSignUp.addEventListener("change",function(e){
  doRegex(inputPasswordSignUp,passwordRegex);
})
