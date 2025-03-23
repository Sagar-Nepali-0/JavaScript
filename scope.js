// Scope 
/**
 * What is Scope?
 * SCOPE BASICALLY MEAN A CERTAIN AREA WHERE IT WORK AND NOT WORK.
 * like a variable, VARIABLE INSIDE THE FUNCTION DOESN'T WORK OUTSIDE THAT FUNCTION.
 */

userAge() // userAge() calling function before function is call HOISTING
let age = 21; 
// let age = 21; this is called global scope
// => GLOBAL SCOPE, THAT VARIABLE VALUE CAN WORK WITHIN ALL THE AREA OF CODE.
function userAge(){
    // let age = 40; this is block scope
    // => BLOCK SCOPE, ONLY RUN WITHIN THE BLOCK, IT'S VALUE DOESN'T WORK OUTSIDE THE BLOCK. 
    let age = 40;
    console.log(`Age: ${age}`);
    // OUTPUT: 40
}


// What is CLOSURE, simple understand it as mostly used during function use
// when after outside function exicute inside function can access outside function variable value.

function addition(x){
    return function(y){
        return x + y;
    };
}

const add1 = addition(3);
const add2 = addition(6);

console.log(`3 + 2 : ${add1(2)}`);
console.log(`6 + 9 : ${add2(9)}`);
