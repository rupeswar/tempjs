//what is a callback function in javascript?
//when u pass a function into another function is called callback function
setTimeout(function () {
    console.log("timer");
}, 5000)

function x(y)
{
    console.log("x");
    y();
}
x(function y(){
    //this fcn y here is called as the callback function
    console.log("y");
})

//the call stack is called as the mainthread
// if any operation blocks the call stack it is called blocking the main thread
