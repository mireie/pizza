//Biz Logic for Toppings
function Toppings() {
  this.toppingList = {};
  this.currentId = 0;
}

Toppings.prototype.addTopping = function (topping) {
  topping.id = this.assignId();
  this.toppingList[topping.id] = topping;
}

Toppings.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Toppings.prototype.findTopping = function (id) {
  if (this.toppingList[id] != undefined) {
    return this.toppingList[id];
  }
  return false;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

function displayToppings(toppings) {
  let ingredientList = $("ul#ingredients");
  let htmlForIngredientInfo = "";
  Object.keys(toppings.toppingList).forEach(function (key) {
    const topping = toppings.findTopping(key);
    htmlForIngredientInfo += "<li id=" + topping.id + ">" + topping.topping + "</li>"
  });
  ingredientList.html(htmlForIngredientInfo);
}

//Biz Logic for Pizza Toppings
function Topping(topping, basePrice) {
  this.topping = topping;
  this.basePrice = basePrice;
}

let toppings = new Toppings();
const topping1 = new Topping("Pepperoni", 5);
const topping2 = new Topping("Canadian Bacon", 5);
const topping3 = new Topping("Pineapple", 4);
const topping4 = new Topping("Olive", 3);
const topping5 = new Topping("Mushroom", 3);
toppings.addTopping(topping1);
toppings.addTopping(topping2);
toppings.addTopping(topping3);
toppings.addTopping(topping4);
toppings.addTopping(topping5);


//Interface Logic
$(document).ready(function () {
  displayToppings(toppings);

});