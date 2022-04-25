var productImg = document.getElementById("productImg");
var smallimg = document.getElementsByClassName("smallimg");
 smallimg[0].onclick = function()
 {
	 productImg.src = smallimg[0].src;
 }
 smallimg[1].onclick = function()
 {
	 productImg.src = smallimg[1].src;
 }
 smallimg[2].onclick = function()
 {
	 productImg.src = smallimg[2].src;
 }
 smallimg[3].onclick = function()
 {
	 productImg.src = smallimg[3].src;
 }
 
 /*--------for form---*/
 var LoginForm = document.getElementById("LoginForm");
 var Regform = document.getElementById("Regform");
 var Indicator = document.getElementById("Indicator");
 
 function register(){
	 Regform.style.transform = "translateX(0px)";
	 LoginForm.style.transform = "translateX(0px)";
 }
 function login(){
	 Regform.style.transform = "translateX(300px)";
	 LoginForm.style.transform = "translateX(300px)";
 }