console.log('--1--------------------------------------------------------')
//1. Rebuild Rock, Paper Scissors in Javascript (this is due Friday Morning); Try to see use at least one ternary operator

class RPS{
    constructor(){
        const playerChoice = prompt('Make Choice, rock, paper, or scissors');
        this.playerChoice = "scissors"
        this.options = ['rock', 'paper', 'scissors']
        this.computerChoice = this.options[Math.floor(Math.random()* this.options.length)]
        console.log(this.computerChoice)
        this.evalChoice();
        }
    evalChoice(){
//- - - - - - - - - - - - - - - - - - - -EVAL - - - - - - - - - - - - - - - - - - /
        console.log('----------------------------------------------------------)');
        if (this.playerChoice == this.computerChoice){ 
            console.log("draw");
            console.log(this.playerChoice);
        }else{
            switch(this.playerChoice){
                case 'rock':
                        console.log(this.computerChoice === "scissors" ? 'win':'lose')
                      //if ( this.computerChoice === "scissors"){
                      //    return "win"
                      //    console.log("wink")
                      //}
                      //else{
                      //    return "lose"
                      //    console.log("lose")
                      //}
                      //elif
                        break;
                case 'paper':
                        console.log(this.computerChoice === "rock" ? 'win':'lose')
                        break;
                case 'scissors':
                        console.log(this.computerChoice === "paper" ? 'win':'lose')
                        break;
                default:
                    console.log("nothing");
            }
            console.log('----------------------------------------------------------)')
            }
        }
//- - - - - - - - - - - - - - - - - END EVAL- - - - - - - - - - - - - - - - - - - /
}
const r = new RPS();

console.log('--2--------------------------------------------------------')
//2. Create your own javascript reducer, using the reduce() function
const numlist = [1,3,8,21,42]
const sum = numlist.reduce((total, ammount) => total + ammount);
console.log(sum)




console.log('--3--------------------------------------------------------')
//3. Create a function in javascript that counts the amount of vowels in a string/sentence.
//
const sometext = 'Consectetur in placeat rerum deleniti ullam Fugit perferendis sit'
function asdf() {
    console.log(counter)
    var counter = 0
    for (i in sometext){
     //   console.log(sometext[i])
         if ((sometext[i]).match(/a|e|i|o|u/)) {
    //         console.log(i)
            counter++
         }
    }
    console.log(counter)
}
asdf();
    


console.log('--4--------------------------------------------------------')
//4. return age from the nested Object.

const nested = [
  [1,2,3,4,5],
  'Terry',
  ['R','O','B', {
    name:'Terry',
    age: 26
    }
  ],
]
console.log(nested[2][3].age)

console.log('--5--------------------------------------------------------')
 //5. Use the correct Array method to add "Kiwi" to the fruits array.

const fruits = ["Banana", "Orange", "Apple"];

fruits.push('Kiwi')
console.log('fruits');


