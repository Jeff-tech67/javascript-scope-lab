// Write your solution in this file!
// Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function-scoped variable
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Block scope
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Change featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}


