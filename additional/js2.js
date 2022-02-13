//1. Using JavaScript, create a function that capitalizes the first letter of a given name.
let name='bob'
var var1= name.split("");
var2= var1[0].toUpperCase();

console.log(var1[0].toUpperCase());
console.log(var1)
//console.log(getChars(name, something);
//function fixword(word){
//    let separate=string.getChars(name) 
//    console.log(separate)
//}
console.log('-----------------------------------------------------------')
//2. Create a Jaden Case function ('Capitalizes the first letter of every word in a sentence) using javascript.
console.log('-----------------------------------------------------------')
//3. Recreate your FizzBuzz challenge in Javascript.

//for multiples of 3 print "Fizz"
//for multiples of 5 print "Buzz"
//for multiples of 3 and 5 print "FizzBuzz"

//RANGE
function* range(start=0, end=undefined, step=1) {    
    if( arguments.length === 1) {end = start, start = 0}    

    [...arguments].forEach(arg => {    
        if( typeof arg !== 'number') {throw new TypeError("Invalid argument")}                               
    })    
    if( arguments.length === 0) {throw new TypeError("range requires at least 1 argument, got 0")}    
    if(start >= end) return                                                                                                                                     
    yield start    
    yield* range(parseInt(start + step), end, step)    
}

function numlist(){
    for (var i in [...range(0,101)]){
        console.log(i);
        if (i % 3 == 0){
            console.log('Fizz')
        }

        if (i % 5 == 0){
            console.log('Buzz')
        }

        if (i % 5 == 0 || i % 3 == 0){
            console.log('BuzzFizz')
        }
    }
}
numlist();

console.log('-----------------------------------------------------------')
//Questions:
//a. What is the difference between "==" & "==="?
//  ==  checks for match in content only
//  === checks for match in datatype and content
//b. What are some string functions? Name at least 3 and show me how you can use them (in code)
//not sure 
//let s1 = 'some string'
//let s2 = `another {s1}`
//
//toUpperCase()
//toString()
//split()
//
//c. What is the difference between a function declaration and a function expression?
//declaration is a function
//expression is a variable
//BONUS QUESTION:   2b || !2b - 'That is the question' (edited) 
//        ______
//       /      \\
//      |   @    ||:)
//       \      //
//         ----
//         its a ham
//
