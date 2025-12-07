// Write your solution in this file!

// 1: Global Scope Variables
let burgers = ['Hamburger', 'Cheeseburger']; // global scope
let featuredDrink = 'Strawberry Milkshake';  // global scope


// Function and Block Scope

// Step 2: Function-scoped variable
function addBurger() {
    // function scope
    var newBurger = 'Flatburger';
    burgers.push(newBurger);
}


// Step 3: Block-scoped variable
if (true) {
    // block scope
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}


// Function to change featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}
