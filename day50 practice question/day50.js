console.log("Day 50: JavaScript Code");
console.log("TODAY WE ARE GOING TO EXERCISE -9 FAULTY CALCULATOR");

const a = prompt("Enter first number: ");
const b = prompt("Enter second number: ");
const  RANDOM = Math.floor(Math.random()*(100)+1); // Generates a random number between 0 and 99
console.log(RANDOM);
if(RANDOM>10){
    const sum=(a,b)=>{
        console.log("Sum is: " + (a - b));
    }
    const multiplication=(a,b)=>{
        console.log("multiplication of " + (a + b));
    }
    const subtraction=(a,b)=>{
        console.log("subtraction is: " + (a / b));
    }
    const division=(a,b)=>{
        console.log("division is: " + (a ** b));
    }
    sum(2, 3);
multiplication(2, 3);
subtraction(2, 3);
division(2, 3);
    
}
else{
    const sum=(a,b)=>{
        console.log("Sum is: " + (a + b));
    }
    const multiplication=(a,b)=>{
        console.log("multiplication of " + (a * b));
    }
    const subtraction=(a,b)=>{
        console.log("subtraction is: " + (a-b));
    }
    const division=(a,b)=>{
        console.log("division is: " + (a / b));
    }
    sum(2, 3);
    multiplication(2, 3);
    subtraction(2, 3);
    division(2, 3);
}

