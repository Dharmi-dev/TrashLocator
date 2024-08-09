


// preloader 

const preloader = document.querySelector(".preloader")

function Mypreloader(){
  setTimeout(() =>{
    preloader.style.display = "none";
  },1000)
}

window.addEventListener("load", Mypreloader);

