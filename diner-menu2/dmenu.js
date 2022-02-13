//Have the Main Menu and a Sides Menu
//Functionality:
//Display menu
//  items
//  price //Add item to cart
//  print waitress string
//Get total price from cart items
//Checkout
//
//Common functionality:
//Print Menu 
//Print Cart
//Checkout
//
//Unique functionality:
//Menu Content
//Menu Name

//node Prompt
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
const pr = require("prompt-sync")({ sigint: true });
let menuList = {
    'dinner':{'eggs':1.29,'toast':1.99,'pancake':99},
    'lunch':{'soup':2.99,'salad':1.59,'sandwich':2.89},
    'breakfast':{'turkey':14.88,'stew':12.99,},
    'appetizers':{'fries':3.29,'rings':2.39,'wishes':11.99}
}
class Menu{
    constructor() {
        this.menus = [] ;
        this.menuChoice = ''
        this.menuItems = {};
        this.itemChoice = '';
    }
    showMenuList() {
        console.log('--------------');
        this.menus = Object.keys(menuList) ;
        console.log('Menus:')
        console.log(...this.menus)
        this.menuChoice = pr('Please select menu: ')
    }
    showMenuItems(){
        console.log('--------------');
        console.log(`${this.menuChoice} menu`);
        this.menuItems = menuList[this.menuChoice];
        for (let i in this.menuItems){
        console.log(`${i}: ${this.menuItems[i]}`);
        }
        console.log('--------------');
    }
    getMenuItem(){
        this.itemChoice = pr('Please select item: ')
        console.log(this.itemChoice);
        console.log('--------------');
    }
    sendToCart(crt){
        //let item { itemName, itemPrice } = 0
        let itemName = this.itemChoice
        let itemValue = menuList[this.menuChoice][this.itemChoice]
        let arr = {}
        console.log(itemName);
        console.log(itemValue);
        arr[itemName] = `${itemValue}`
        crt.cartItems[itemName] = `${itemValue}`
        //console.log(crt.cartItems);
        //console.log(arr)
    }
}

class Cart{
    constructor() {
        this.cartItems = {}
        this.cartTotal = 0
        this.complete=0
    }
    showCart(){
        for (let i in this.cartItems){
        console.log(`${i}: ${this.cartItems[i]}`);
        }
        this.getTotal();
    }
    getTotal(){
        this.cartTotal = 0
        for (let i in this.cartItems){
            this.cartTotal += parseFloat(this.cartItems[i])
        }
        console.log(`Total: ${this.cartTotal}`);
        this.checkout
    }
    checkout(){
        let check = pr('Would you like the check?   (yes/no)')
        if (check === 'yes'    ){
            this.complete=1
        }
    }
    removeFromCart(){
    }
}

///////////////////////////////////////////////////////
let session1Menu = new Menu();
let session1Cart = new Cart();

function init(){ 
    while (session1Cart.complete != 1) {
    console.log('-------------');
    session1Menu.showMenuList();
    console.log('-------------');
    session1Menu.showMenuItems();
    console.log('-------------');
    session1Menu.getMenuItem();
    //console.log(session1Cart.cartTotal);
    session1Menu.sendToCart(session1Cart);
    console.log('-------------');
    session1Cart.showCart();
    console.log('-------------');
    session1Cart.checkout();
    }
}

init()
console.log('-------------');
console.log('Thank you for your patronage');
console.log(`Ammount paid: ${session1Cart.cartTotal}`);
console.log('-------------');


