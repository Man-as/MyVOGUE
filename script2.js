var LoginForm = document.getElementById("LoginForm");
 var Regform = document.getElementById("Regform");
 var Indicator = document.getElementById("Indicator");
 
 function register(){
	 Regform.style.transform = "translateX(0px)";
	 LoginForm.style.transform = "translateX(0px)";
	 Indicator.style.transform = "translateX(100px)";
 }
 function login(){
	 Regform.style.transform = "translateX(300px)";
	 LoginForm.style.transform = "translateX(300px)";
	 Indicator.style.transform = "translateX(0px)";
 }