// let and const => Variables

function variables(){ 
    let age =  19;
    age = 20      
    // In let variable value can be updated but can't use same variable
    console.log(age) // age => 20

    const PI = Math.PI
    // PI = 12
    // In const variable value can't be updated and it is fixed
    console.log(PI)
    // PI => 3.141592653589793
}
// variables()


let name = () => {
    // a easier way of creating a function using variable.
    return "Hello Batman"
}
// console.log(name())


function template_literals(){
    // new way of writing different data types on cleaner way.
    var name = "Bookman"

    console.log(`I am ${name}.`)
}
// template_literals()


function user_details(username = "Unknown", userage = "-"){
    console.log(`Name: ${username}\nAge: ${userage}`)
}
// user_details("Bookman", 504)

function restAndSpread(){
    // a easier way of copying a element, is called spread.
    let num = [1,2,3,4,5,6]
    let num_copy = [...num]
    console.log(num)
    console.log(num_copy)

    // a way of storing remaing value, is called rest.
    function value(a,b,c,d, ...e){
        console.log(a, b, c, d, e)
    }
    value(1,2,3,4,5,6,7,8,9)
}
// restAndSpread()

function destructuring(){
    var a = [1,2,3]
    var [b,c] = a
    console.log(c, b)

    let user = {name: "Bookman", age: 402}
    let{age} = user
    console.log(age)
}
// destructuring()