console.log("JavaScript - Selecting by Ids, Classes, and More ");
// changing style of an element using JavaScript` by using class names
let boxes = document.getElementsByClassName("box")
console.log(boxes); 

boxes[2].style.backgroundColor = "red";
boxes[2].style.color = "white";

// changing style of an element using JavaScript` by using id
let box2=document.getElementById("red")
box2.style.backgroundColor="gold"
box2.style.color="black"


//querySelector

document.querySelector("#red").style.backgroundColor = "blue";
//querySelector - issme khali phala element jiska class same hoag ussi ki property change hogi baaki ki nahi 
document.querySelector(".box").style.backgroundColor = "brown";
// //querySelectorAll - issme  sabhi element hiski class same  h uska hamko html collection mil jayega de dega
console.log(document.querySelectorAll(".box").forEach((element) => {
    element.style.backgroundColor = "green"
}))