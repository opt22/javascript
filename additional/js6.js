//1. Create a javascript promise that resolves to say 'Hello Everyone!' after 4 seconds.
//>>

const greeting = new Promise((resolve) => {
        setTimeout(() => {
    resolve(console.log('Hello Everyone!'));
    },4000);
});

greeting

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//2. What are a few functions we can use with the Lodash library?
//_.now #get current time in miliseconds
//-math operations
//    _.floor
//    _.ceil
//-array operations
//    _.flatten
//-string operations
//    _.upperCase
//    _.lowerCase
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//3. Create a function utilizing one of the functions you mentioned in the questions above.
//>>

//let arr = [1,2,4,[8,2,6]];
//
//function smoothArr(someInpt) {
//    return _.flatten(someInpt)
//}
//console.log(`le' smooth array ${smoothArr}`);

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//4. Create a average (get the average of an array) function that utilizes the spread operator to pass in the elements in the array.

const arr2 = [1,9,22,2,3];
console.log(arr2);
console.log(...arr2);
function reducer(a,b) {
    return a + b
}
let result = arr2.reduce(reducer);
//let result = [...arr2].reduce(reducer);
console.log(result)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//5. Show me how to use variable deconstruction

let p1 = 'bob';
let p2 = 'ed';

let tempP1 = p2;
let tempP2 = p1;

p1 = tempP1;
p2 = tempP2;

console.log(`
Player1 : ${p1}
Player2 : ${p2}
`)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//6. Create me a function that uses es5 syntax to return a greeting, Then create the same function using es6 syntax (you do not have to create a complicated function. I just want a clear indication that you understand the differences)
class  Apple{
    constructor(isFruit){
        this.isFruit = isFruit
            isFruit === 'yes' ? console.log('Apple is a fruit') : console.log('No')
    }

}

let a = new Apple('yes');
let b = new Apple('no');
a
b

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//7. What is the Javascript debugger, and why is it useful to us?
//    it allows us to pause the execution of the program and examine 
//    values at that in time





