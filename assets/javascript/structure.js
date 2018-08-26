
console.log('hello world')
// ctrl + alt + n
// Bad structure: Printx depends on the variable x to exist outside of its' scope
function printx () {
    console.log(x, 'inside printx')
}

/// console.log(x, 'above x=5')
// var initializations are hoisted. const is not!
const x = 5
printx()
//console.log(x, 'below x=5')




//Better structure (dependency injection): add the variable to the argument (input) to explicitly require it when the function is called


function printY (y) {
    console.log(y)
}

const y = 10

printY(y)