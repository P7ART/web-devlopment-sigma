console.log("tutorial on Javasripts Loops")

for (let i= 0; i < 100; i++) {
    console.log(i+1);
    if (i === 50) {
        console.log("Halfway there!");
    }
    
 }

//FOR IN LOOP 
let  person = {
    name: "John",
    age: 30,
    city: "New York"
}


for (const a in person) {
        let element = person[a];
        console.log( a , person[a]);
        
    }


// FOR OF LOOP  

for (const iteration of "khush") {
    console.log(iteration);
    
 }

//while loop
let i = 0;
while (i < 10) {
    console.log(i+1);
    i++;
}


// do while loop
let r = 0
do{
    console.log(r+1);
     r++;
}while(r <5);
    console.log("Loop ended");
// The do-while loop ek baar chalega before condition check karega. If condition true hai to do-while loop chalega aur agar false hai to loop nahi chalega.