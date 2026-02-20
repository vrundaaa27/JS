//ARRAYS

let marks = [97, 81 , 75, 92, 88];
console.log(marks);

//LOOPING OVER AN ARRAY

let cities = ["Pune","Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
for(let j = 0 ; j < cities.length; j++){
    console.log(cities[j]);
}
//Usinig for-of loop
for( let city of cities){
    console.log(city.toUpperCase());
}

//ARRAY METHODS

//PUSH()
let items = ["pen", "paper", "ink"];
console.log(items);
items.push("eraser","colours");
console.log(items);

//POP()
items.pop();
console.log(items);

//TOSTRING()
console.log(items);
console.log(items.toString());

//CONCAT()
let names = ["Sita", "Gita"];
let surnames = ["Pawar","Shinde","Deshmukh"];
let fullNames = names.concat(surnames);
console.log(fullNames);

//UNSHIFT()
items.unshift("crayons");
console.log(items);

//SHIFT()   
items.shift();
console.log(items);

//SLICE()
console.log(items);
console.log(items.slice(1,4));

//SPLICE()
let arr = ['1','2','3','4','5','6','7'];
console.log(arr);
//ADD ELEMENT
// arr.splice(2,0,'101');
// console.log(arr);
// console.log(arr.length);
// //REMOVE ELEMENT
// arr.splice(3,1);
// console.log(arr);
// console.log(arr.length);
// REPLACE ELEMENT
arr.splice(0,1,'000','101');
console.log(arr);
console.log(arr.length);