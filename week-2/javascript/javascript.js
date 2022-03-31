var welcome = document.querySelector("#welcome");
welcome.onclick = function(){changewords()};
function changewords(){
    document.querySelector("#welcome").innerHTML = "Have a Good Time! :)"
}

const menu = document.querySelector(".main-nav");
const menuItems = document.querySelectorAll(".menuItem");
const mainnav= document.querySelector(".mainnav");
const closeIcon= document.querySelector("#closed");
const menuIcon = document.querySelector("#burger");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

function visible(){
    document.querySelector(".main-nav").style.cssText = "display:block"
    document.querySelector("#closed").style.cssText = "display:block";
}

function invisible(){
    document.querySelector(".main-nav").style.cssText = "display:none"
    document.querySelector("#closed").style.cssText = "display:none";
}

menuIcon.addEventListener("click", visible);
closeIcon.addEventListener("click", invisible);

mainnav.addEventListener("click", toggleMenu);
// closeIcon.addEventListener("click", toggleMenu);
// menuIcon.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )