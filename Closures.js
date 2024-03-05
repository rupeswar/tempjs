//function along with its lexical scope bundled together forms a closure.
function x()
{
    var a = 7;
    function y()
    {
        console.log(a);
    }
    a = 100; 
    return y;
}
var z = x();
console.log(z);
z();
//Uses of Closures:
//Module Design Pattern
//Currying
//functions like once
//memoize
//maintaining state in async world
//settimeouts
//Iterators
//and mamny more..