console.log("Functions in Javascript");

function person(name){
    console.log("Hello " + name);
    console.log("Welcome to the world of Javascript"+name);
    console.log("Have a great day " + name);
    console.log("Goodbye " + name);
}

person("John");
person("Jane");


function  sum(a,b ,c=2){
    // console.log("The sum of " + a + " and " + b + " is: " + (a + b));
    return a + b +c;
}
result=sum(3,5,1)
console.log("The sum is: " + result);

const func1 =(a,b)=>{
    console.log(a+b);
    
}
func1(2,3);

const fun =(s,g)=>(s+g);
      console.log(fun(2,7));
