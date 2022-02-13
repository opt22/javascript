//[ ] TODO's
//[ ] Must have a user.
//[ ] Create a function that will route through a main menu.
//[ ] Maintain hold a balance that can be deposited/withdrawn and then updated.
//[ ] Need to be able to check the current balance. 
//[ ] Be able to exit the program.
const prompt = require("prompt-sync")({ sigint: true });

class Wallet{
    constructor(){
        this.user= 'none'
        this.ballance= 0
        this.getuser();
        this.menu();
    }

    getuser(){
        let user = prompt('enter username:')
        this.user = user
        console.log(user);
        }

    menu(){
        console.log(`User:${this.user}`)
        console.log("[1] Deposit")
        console.log("[2] Withdraw")
        console.log("[3] Check Balance")
        console.log("[4] EXIT")
        console.log("")
        console.log("==================")
        this.menuselect()
    }

    menuselect(){
       let selection=prompt('Which menu?')
            console.log(selection);
       if (selection == 1){
           this.deposit(this.ballance)
       }
       if (selection == 2){
           this.withdrawal(this.ballance)
       }
       if (selection == 3){
           this.getballance(this.ballance)
       }
       if (selection == 4){
          console.log("ThankYou")
          throw('thank you')
       }else{
           this.menu();
       }
    }
    getballance(){
        console.log(`Ballance:${this.ballance}`)
            this.menu
    }

    deposit(ballance){
        let depammount = prompt('Enter deposit ammount')
        this.ballance = Number(ballance) + Number(depammount)
            //need to convert to float?
        this.getballance(this.ballance)
        this.menu
    }

    withdrawal(ballance){
        let wAmt = prompt ('Enter withdrawal ammount')
        //let depammount = float(input("Withdrawal amount: "))
        this.ballance = Number(ballance) - Number(wAmt)
        this.getballance(this.ballance)
        this.menu
    }
}

let w = new Wallet()
w
