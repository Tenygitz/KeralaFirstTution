const hamburgerMenuIcon = document.querySelector(".hamburgerMenuIcon");
const  nav = document.querySelector(".hamburgerMenu-nav")

console.log('display')

function showMenu(){
    nav.style.display="block";e
 
}

hamburgerMenuIcon.addEventListener("click", showMenu() )

let firstName = document.getElementById("first");
let secondName = document.getElementById("Last");
console.log("icon",firstName)
function formsubmit(){
   if(firstName.value==""){
    alert("please enter a valid first name")
   }
   
}