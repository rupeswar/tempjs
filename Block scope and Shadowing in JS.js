{
    //A block is used to combine multiple javascript statement into a group.
    //compound statement
    //Block scope means what all variables and functions we can access inside this block.
    var a = 10;
    console.log(a);
}
// Illegal shadowing
let a = 20;
{
    var a = 30;
}

//var is function scoped. so, this is fine, this is not a illegal shadowing.
let a = 20;
function x() {
    var a = 20;
}