//FOR LOOP

for(let a = 1; a <= 5; a++){
    console.log("Vrunda");
}

//Calculate the sum of numbers from 1 to 5
let sum = 0;
for( let i = 1; i <=5; i++){
    sum = sum + i;
    console.log(sum);
}

console.log("loop ended");    

//Calculate the sum of numbers from 1 to n
let sum1 = 0;
let n = 10;

for( let j = 1; j <=10; j++){
    sum1 = sum1 = j;
    console.log(sum1);
}

//INFINITE LOOP
// for(let k = 1; k <=5; k--){
//     console.log("Vrunda");
// }

//WHILE LOOP
let c = 1;
while(c <=5){
    console.log("Vrunda");
    c++;
}

//DO-WHILE LOOP
let d = 10;
do{
    console.log("Mhaske");
}while(d < 5);

//FOR-OF LOOP
let e = "APNACOLLEGE";
for(let z of e){
    console.log("z =",z);
}

//FOR-IN LOOP
//EG: 1
let f ="JAVASCRIPT";
let size = 0;
for(let y of f){
    console.log("y =",y);
    size++;
}
console.log("size=",size);

//EG: 2
let student = {
    name : "Vrunda Mhaske",
    age : 21,
    grade : "TE",
    cgpa : 8.3,
}
for(let key in student){
    console.log("key =",key, " value =",student[key]);
}

