let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick=() => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close1').onclick=() => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector("#feedback").onclick=() =>{
document.querySelector("#co1").classList.toggle("active");
}
document.querySelector("#close").onclick=() =>{
document.querySelector("#co1").classList.toggle("active");

}
function myjuices(){
document.getElementById("juices").style.display="block";
}
function myfastfood(){
document.getElementById("fast").style.display="block";
}
function mycurry(){
document.getElementById("curry").style.display="block";
}
function myvegterien(){
document.getElementById("vegeterien").style.display="block";
}
function mypizza(){
document.getElementById("pizza").style.display="block";
}
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = () =>{
widget.style.display = "none";
post.style.display = "block";
editBtn.onclick = () =>{
    widget.style.display = "block";
    post.style.display = "none";
}
return false;
}
function openAbout(){
document.getElementById("about").style.width = "100%";

}
function closeNav(){
document.getElementById("about").style.width = "0%";
}
