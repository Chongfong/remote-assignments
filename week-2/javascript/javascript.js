var welcome = document.querySelector("#welcome");
welcome.onclick = function(){changewords()};
function changewords(){
    document.querySelector("#welcome").innerHTML = "Have a Good Time! :)"
}

function visible(){
    document.querySelector(".burgermenu").style.cssText = `    
    display:flex;
    flex-direction: column;  
    `;
    document.querySelector("#closed").style.cssText = "display:block; z-index:100";
    document.querySelector(".main-nav").style.cssText = "none;";
}

function invisible(){
    document.querySelector(".burgermenu").style.cssText = "display:none";
    document.querySelector("#closed").style.cssText = "display:none";
    // document.querySelector(".main-nav").style.cssText ="display:flex;";
}

const menuIcon = document.querySelector("#burger");
const closeIcon= document.querySelector("#closed");

menuIcon.addEventListener("click", visible);
closeIcon.addEventListener("click", invisible);


const showboxbtn = document.querySelector('#showbtn')
function showbox(){
    document.querySelector(".hidden-container").style.cssText = "display:flex";
}

showboxbtn.addEventListener("click",showbox);
