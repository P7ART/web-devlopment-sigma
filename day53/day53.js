console.log("TODAY ARRAY and METHODS PRACTICE");

let arr = [1, 2, 3, 4, 5];
let dif=[1, 2, 3, 4,"khush","jahnavi","neha"];

// accessing value in array

console.log(arr[1])
console.log(dif[6])

//Finding the length of an array
console.log(arr.length);
console.log(dif.length);

//changing the value

arr[1]= 30
console.log(arr);
dif[6]="ishita"
console.log(dif);   
dif[0]=40


// type of array
console.log(typeof arr);
console.log(typeof dif);


// ARRAY METHODS

//TOSTRING

console.log(arr.toString())
console.log(dif.toString())


//JOIN
console.log(arr.join(" and "))
console.log(dif.join(" / "))

//POP
console.log(arr.pop())
console.log(dif.pop())
console.log(dif.pop())
console.log(dif.pop())
console.log(dif.pop())
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())

//shift(removes first element) aur pop ka bhai hota

console.log(arr.shift())
console.log(dif.shift())


//push

console.log(arr.push(100))
console.log(arr)
console.log(dif.push("akash"))
console.log(dif);

//unshift(adds element at the beginning)bhai of push
console.log(arr.unshift(200))
console.log(arr);
console.log(dif.unshift("sanjana"))
console.log(dif)

//delete

console.log(delete arr[0])
console.log(arr);
console.log(delete dif[1])  
console.log(dif);
console.log(delete dif[14])



//concat
console.log(arr.concat(dif))


//sort
console.log(arr.sort())
console.log(dif.sort())

//splice
console.log(arr.splice(1, 2)) // removes 2 elements from index 1
console.log(arr);
console.log(dif.splice(2,5 ,"kushagra","hrishabh"))
console.log(dif);

//slice
console.log(arr.slice(1,4))
console.log(arr);
console.log(dif.slice(2,5))
console.log(dif);

//reverse
console.log(arr.reverse())

console.log(dif.reverse())

// looping in array
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(i,element);   
    
}
for (let i = 0; i < dif.length; i++) {
    const element = dif[i];
    console.log(i,element);   
    
// ARRAY FROM  -use to create an array from other  object

let str = " i am Khushagra";
console.log(Array.from(str))


//map  creates a new array with the results of calling a provided function on every element in the calling array.



// let numbers = [1, 2, 3, 4, 5];
let newarr = numbers.map(element => {
    return element ** 2;
})
console.log(newarr); // [2, 4, 6, 8, 10]


//filter creates a new array with all elements that pass the test implemented by the provided function.
arr= [32, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const compare =(b)=>{
    if(b>7)
        return b;
    else
        return null;
}

console.log(arr.filter(compare)); // [8, 9, 10]



//reduce

let r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let multiplication = (a,b)=>{
    return a * b;
}
let y = r.reduce(multiplication, 1); // 1 is the initial value
console.log(y); 

 
arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for of loop
// use for-of loop to iterate over the elements of an array or iterable object
for (const element of arr) {
    console.log(element);
}
//for in loop
// use for-in loop to iterate over the indices of an object properties

let object = {
    name: "Khushagra",
    age: 20,
    city: "Delhi"
};


for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {

        console.log(`${key}: ${object[key]}`); // prints key and value  
        
    }
}

//// forEach method
//use forEach method to execute a provided function once for each array element
let a = [1, 2, 3, 4, 5];
a.forEach((element) =>{ 
    if(element % 2 == 0) {
        console.log("even number",element)
    }
    else{
        console.log("Odd number found:", element)
    }
     
    
});
