console.log("-------API getElementsByTagName() to select element by tag name------");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML="My Hobbies";

const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

const elementList=document.getElementsByClassName("liItem");
console.log(elementList[1].innerHTML);

const elementProfileById=document.querySelector("#profile");
console.log(elementProfileById);

const elementLiitemByClass = document.querySelector(".liItem");
console.log(elementLiitemByClass);

const elementQuery = document.querySelectorAll(".liItem")
console.log(elementQuery);