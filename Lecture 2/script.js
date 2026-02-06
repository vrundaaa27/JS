//OPERATORS IN JS

//ARITHMETIC
//ADDITION OPERATOR
a=5;
b=6;
console.log( "a + b = ", a + b);

//SUBTRACTION OPERATOR
a=5;
b=6;
console.log( "a - b = ", a - b);

//MULTIPLICATION OPERATOR
a=5;
b=6;
console.log( "a * b = ", a * b);

//DIVISION OPERATOR
a=5;
b=6;
console.log( "a / b = ", a / b);

//MODULUS OPERATOR
a=7;
b=6;
console.log( "a % b = ", a % b);

//INCREMENT OPERATOR
a=5;
b=6;
// console.log( "a++ = ", a++);
console.log( "++a = ", ++a);
// console.log(a);

//DECREMENT OPERATOR
a=5;
b=6;
console.log( "--b = ", --b);
// console.log(b);

//DECREMENT OPERATOR
a=5;
b=3;
console.log( " a ** b = ", a ** b);
// console.log(b);


//ASSIGNMENT 
// =
c = 5;
d = 6;
console.log("c =", c);

// +=
c = 5;
d = 6;
console.log("c +=", c += 2);

// -=
c = 5;
d = 6;
console.log("c -=", c -= 2);

// *=
c = 5;
d = 6;
console.log("c *=", c *= 2);

// /=
c = 5;
d = 6;
console.log("c /=", c /= 2);

// %=
c = 5;
d = 6;
console.log("c %=", c %= 2);

// **=
c = 5;
d = 6;
console.log("c **=", c **= 2);


//COMPARISION 
//EQUAL TO ==
a=5;
b=6;
console.log( "a == b", a == b);

//NOT EQUAL TO !=
a=5;
b=6;
console.log( "a != b", a != b);

//GREATER THAN >
a=5;
b=6;
console.log( "a > b", a > b);

//LESS THAN <
a=5;
b=6;
console.log( "a < b", a < b);

//GREATER THAN EQUAL TO >=
a=5;
b=5;
console.log( "a >= b", a >= b);

//LESS THAN EQUAL TO <=
a=5;
b=6;
console.log( "a <= b", a <= b);

//STRICTER 
//EQUAL TO ===
a=5;
b="5";
console.log( "a === b", a === b);

a=5;
b=5;
console.log( "a === b", a === b);

//NOT EQUAL TO !==
a=5;
b="6";
console.log( "a !== b", a !== b);

a=5;
b=5;
console.log( "a !== b", a !== b);


//LOGICAL OPERATORS
// AND &&
c = 5;
d = 6;
console.log("c != d && c < d", c != d && c < d);
console.log("c == d && c > d", c == d && c > d);
console.log("c == d && c < d", c == d && c < d);
console.log("c != d && c > d", c != d && c > d);

// OR ||
c = 5;
d = 6;
console.log("c != d || c < d", c != d || c < d);
console.log("c == d || c < d", c == d || c < d);
console.log("c != d || c > d", c != d || c > d);
console.log("c == d || c > d", c == d || c > d);

//NOT !
c = 5;
d = 6;
console.log( "c != d", c != d);
console.log( "d != 6", d != 6);


//CONDITIONAL STATEMENTS IN JS

//if statement
let age = 25;
if(age >= 18){
    console.log(" You can VOTE")
}
if(age <= 18){
    console.log(" You CANNOT VOTE")
}

//if-else statement
let age1 = 1;
if(age1 >= 18){
    console.log(" You can VOTE")
}else{
    console.log(" You CANNOT VOTE")
}

//else-if statement
let mode = "red";

if(mode === "dark"){
    console.log("black");
}else if(mode === "pink"){
    console.log("pink");
}else if(mode === "blue"){
    console.log("blue");
}else{
    console.log("white");
}

//ONE LINE STATEMENT
let mode1 = "dark";
if(mode1 === "dark") console.log(mode1);