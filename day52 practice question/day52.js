/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/ 



let first_name={
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let shop={
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}
let another_word={
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

owner_name=Math.floor(Math.random() * 3 + 1);
shop_name=Math.floor(Math.random() * 3 + 1);
type_name=Math.floor(Math.random() * 3 + 1);
console.log("Business Name: " + first_name[(owner_name)] + " " + shop[(shop_name)] + " " + another_word[(type_name)]);