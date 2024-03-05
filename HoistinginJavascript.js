getName();
console.log(x);

var x = 7;

function getName()
{
    console.log("Namaste Javascript");
}
//If we use arrow function. It will behave as a variable in the execution context.
var getName2 = () => {
    console.log("variable");
}