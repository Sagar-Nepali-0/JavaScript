// Scope 
/**
 * What is Scope?
 * SCOPE BASICALLY MEAN A CERTAIN AREA WHERE IT WORK AND NOT WORK.
 * like a variable, VARIABLE INSIDE THE FUNCTION DOESN'T WORK OUTSIDE THAT FUNCTION.
 */


// let age = 21; this is called global scope
// => GLOBAL SCOPE, THAT VARIABLE VALUE CAN WORK WITHIN ALL THE AREA OF CODE.
let age = 21; 
function userAge(){
    // let age = 40; this is block scope
    // => BLOCK SCOPE, ONLY RUN WITHIN THE BLOCK, IT'S VALUE DOESN'T WORK OUTSIDE THE BLOCK. 
    let age = 40;
    console.log(age) 
    // OUTPUT: 40
}
userAge()
