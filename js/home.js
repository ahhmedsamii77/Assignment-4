 
//  to prevent user to go home page if he is no Log in
 if(localStorage.getItem("login") == null){
     location.replace("./index.html");
 }

var arrofInputVAlues = [];
if (localStorage.getItem("arrofInputVAlues")) {
  arrofInputVAlues = JSON.parse(localStorage.getItem("arrofInputVAlues"));
}

var homeMessage = document.querySelector(".homeMessage");
homeMessage.innerHTML += localStorage.getItem("userName");
var logout = document.querySelector(".logout");
// handle Logout
logout.addEventListener("click", function (e) {
  e.preventDefault();
  arrofInputVAlues.pop();
  localStorage.setItem("arrofInputVAlues", JSON.stringify(arrofInputVAlues));
  localStorage.removeItem("userName");
  localStorage.removeItem("login");
 location.replace("./index.html");
});
