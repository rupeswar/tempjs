//function statement aka function declaration
function a()
{
    console.log("a called");
}
a();

//function expression
var b = function()
{
    console.log("b called");
}
b();

//the diff between function statement and function expression is the hoisting. 
//If u invoke a function before creating it, in case of function statement during hoisting the function is stored
//but in case of function expression the var b is undefined during memory creation so it will throw an error.

//anonymous functions: this will give syntax error, so it is only used as values.
// function () {

// }

//named function expression
var b = function xyz()
{
    console.log("b called");
}
b();
xyz();
//u will get a reference erroe bcoz this xyz() is not created in the global scope. it is created as a local variable
var b = function xyz()
{
    console.log(xyz);
}
b();

//diff between parameters and arguments
var b = function xyz(param1, param2)
{
    console.log("b called");
}
b(arg1, arg2);

//first class functions
//the ability to use functions as values is known as first class functions
var b = function (param1)
{
    console.log(param1);
}
b(function()
{

});


var b = function (param1)
{
    console.log(param1);
}
function xyz()
{

}
b(xyz);


var b = function (param1)
{
    return function xyz()
    {

    }
}
console.log(b());
//functions are first class citizens