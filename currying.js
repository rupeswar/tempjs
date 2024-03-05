// currying: one function returning another function
function addaConstantValue(constant)
{
    return (value) => {
        return value + constant;
    }
}

//console.log(addaConstantValue(15)(2));

const a = addaConstantValue(15);

console.log(a(3));