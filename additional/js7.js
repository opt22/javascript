//What is ESLint Why is it useful?
//    error checking for javascript react
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//Create me a try-catch with a promise
const message = 'Hello Everyone!';

const greeting = new Promise((resolve) => {
        setTimeout(() => {
    resolve(console.log(message));
    },4000);
});

try {
    greeting
}catch(err){
    console.log("No");
    console.log(err);
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//Why do we export/import files?
    //to share functionality amongst javascript files and make internal parts of a script
    //available to other scripts

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//What is NPM? Why do we need it, and how is it used?
    //package manager for node.js

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//What does "Functional Programming" mean?
    //setting up a pipeline of functions to achieve a result

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//What is the node_modules folder for?
    //this directory stores modules installed by npm
    
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//How do I install a npm module/package? (like momentjs for instance)
    //npm install momentjs

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//What command do I use to install the node_modules?
    //npm install momentjs

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//What is Babel, why do we need it?
    //babel refactors code to support earlier versions of javascript
  
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /
//Create me a function that formats your birthday using moment.  
    //let somedate = '10/31/1986';
    //moment(somedate).format('MM/DD/YYYY')

