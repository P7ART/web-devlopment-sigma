let btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    alert("Button clicked!")
});
 

let btn = document.getElementById("btn");
btn.addEventListener("dblclick",() => {
  document.querySelector(".box").innerHTML="you just double click me 🥲🥲🥲.... so sad "
});



let btn = document.getElementById("btn");
btn.addEventListener("contextmenu",() => {
  document.querySelector(".box").innerHTML="you just right click me 🥲🥲🥲.... so sad "
});





let btn = document.getElementById("btn");
document.addEventListener("keydown",(e) => {
 console.log(`You just pressed the ${e.key} key`);
});