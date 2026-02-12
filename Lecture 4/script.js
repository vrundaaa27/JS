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