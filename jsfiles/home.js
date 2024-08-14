// hamberger navigation

const menuBtn = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".side-navbar");
const crossBtn = document.querySelector(".cross-btn-nav");






function showSidebar(){
  console.log("btn clicked");
  if(sideBar.style.display == "none"){
    sideBar.style.display = "flex";
    console.log("display changed to flex")
  }
  // else {
  //   sideBar.style.display = "none";
  //   console.log("display changed to none")
  // }
}

function hideSidebar(){
  console.log("inside hidebar")
  // if(sideBar.style.display == "flex"){
    
  //   console.log("sidebar is hidden")
  // }
  sideBar.style.display = "none";
}


crossBtn.addEventListener("click", hideSidebar)
menuBtn.addEventListener("click", showSidebar)



// preloader 

const preloader = document.querySelector(".preloader")

function Mypreloader(){
  setTimeout(() =>{
    preloader.style.display = "none";
  },1000)
}

window.addEventListener("load", Mypreloader);

