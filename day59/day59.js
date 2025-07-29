 let div = document.createElement("div");
 div.setAttribute =("class","box1");
 div.innerHTML = "this show the creation of element in document"
 document.querySelector(".container").append(div);
 document.querySelector(".container").prepend(div);
 document.querySelector(".container").before(div);


 //replacewith() method in  insertion
 let p= document.createElement("p");
 div.appendChild(p);
 let span = document.createElement("span");
 p.replaceWith(span);

 

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin", "<h1>Before Begin</h1>");
