console.log("Hello, World!");
var   a = 5;  
let b = "harry";
let _c = 5.5;
let $d = 5;
// var 55a=766; // This will throw an error because variable names cannot start with a number
console.log(a);
console.log(a+b+5)
console.log(typeof a,typeof b);
{
    let a = 6; // This 'a' is block scoped
    console.log(a); // This will log 6
}
console.log(a); // This will log 5, the outer 'a' remains unchanged

const a1 = 5;
// a1 = a1+6; // This will throw an error because a1 jo h jo h wo constant h wo change nahi ho sakta immutable h 

// DATA TYPES
// 1. Primitive Data Types
let num = 5; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let und = undefined; // Undefined
let n = null; // Null
let f = 3.55; // Float
const q = true;

console.log( num,str,bool,und,n,f,q); // "number"
console.log( typeof num,typeof str,typeof bool,typeof und,typeof n,typeof f,typeof q); // "number"


//object in javascript
let onj={
    name: "Harry",
    channel: "CodeWithHarry",
    
    }

console.log(onj); // { name: 'Harry', channel: 'CodeWithHarry' }
onj.salary= "1000crore";// iss tarah ham javascript ke object mei  item add kar sakte hain
console.log(onj); // { name: 'Harry', channel: 'CodeWithHarry', salary: '1000crore' }
onj.ishandsome =true;// iss tarah ham javascript ke object mei  item add kar sakte hain
console.log(onj); // { name: 'Harry', channel: 'CodeWithHarry', salary: '1000crore', ishandsome: true }

