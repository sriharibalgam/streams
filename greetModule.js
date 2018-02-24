// function statement
function greet(){
    console.log("Hi");
}
//greet();// Invoke

//functions are First-Class Functions
function firstClassFunction(fn){ // passing function as paramenter
    fn(); // passed function
}
firstClassFunction(greet);// passing greet(); as function


// Function Expression
var greetMe = function(){ // anonymous function
    console.log("Hi SrihariBalgam");
} // function as expression creates function onthefly

//greetMe(); // 
//firstClassFunction(greetMe); 

module.exports = greet;

