// hamberger navigation

const menuBtn = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".side-navbar");
menuBtn.addEventListener("click", showSidebar)


function showSidebar(){
  if(sideBar.style.display === "none"){
    sideBar.style.display = "flex";
  }else sideBar.style.display = "none";
}


// preloader 

const preloader = document.querySelector(".preloader")

function Mypreloader(){
  setTimeout(() =>{
    preloader.style.display = "none";
  },1000)
}

window.addEventListener("load", Mypreloader);

