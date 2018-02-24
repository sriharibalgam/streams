var greet = require("./greetModule");

//greet(); // using Exported object here

var obj = {
    sayHello : "Hello"
}

console.log(obj.sayHello);
console.log(obj["sayHello"]);
obj.sayHi = "Srihari Balgam";
console.log(obj["sayHi"]); // We can use 

var name = "Srihari Balgam";

var greet = 'Hello ' + name;
var greet1 = `Hello ${ name }`; // templating ( ` ) backtick | grade accent mark
console.log("Old Concat: ", greet, "\n", "Template Concat: ", greet1);