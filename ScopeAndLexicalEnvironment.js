function a()
{
    console.log(b);
}
var b = 10;
a();
//At first when we call the function a(), it will try to find the value of b in the local memory space or a's local 
//execution context or not. and surely it will be not there as we have never defined it in the local space.
function c()
{
    var x = 10;
    d();
    function d()
    {

    }
}
c();
console.log(x);
//Here we will get reference error for x;
//d function is lexically sitting inside c function. And c is lexically inside the global EC.