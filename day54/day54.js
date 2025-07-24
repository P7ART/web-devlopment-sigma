console.log("today factorial exercise ")

let m = 6


let arr = Array.from({ length: n }, (_,i) => i +1);

console.log(arr)


let fact=(a ,e)=>{
    return a * e;

}

console.log(arr.reduce(fac))


//factorail by using for looop

let n = 6;
let fac = 1
for (let i = 1; i <= n; i++) {
    fac *= i;
}
console.log(fac);
