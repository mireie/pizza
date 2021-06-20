//Biz Logic for Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getPrice = function (inputPizza) {
  sizePrice = this.size.sizeBasePrice;
  sizePriceMultiplier = this.size.multiplier;
  let toppingsPrice = 0;
  Object.keys(this.toppings).forEach(function (key) {
    toppingsPrice += inputPizza.toppings[key].basePrice * sizePriceMultiplier;
  });
  const price = sizePrice + toppingsPrice;
  return price.toFixed(2);
}

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

//Biz Logic for Topping
function Topping(topping, basePrice) {
  this.topping = topping;
  this.basePrice = basePrice;
}

//Biz Logic for Sizes
function Sizes() {
  this.sizeList = {};
  this.currentId = 0;
}

Sizes.prototype.addSize = function (size) {
  size.id = this.assignId();
  this.sizeList[size.id] = size;
}

Sizes.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

//Biz Logic for Size
function Size(size, sizeBasePrice, multiplier) {
  this.size = size;
  this.sizeBasePrice = sizeBasePrice;
  this.multiplier = multiplier;
}

//Let's make some pizzas

function checkedToppings() {
  let selectedToppings = [];
  $(".form-check-input:checkbox:checked").each(function () {
    selectedToppings.push(toppings.toppingList[$(this).prop("value")]);
  });
  return selectedToppings;
}

//Create toppings and sizes
//(After completing this I realize I could have done this without functions and just define static objects for the toppings and pizzas.)
function initSizesToppings() {
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
  const sizeSmall = new Size("Small", 10, 1);
  const sizeMedium = new Size("Medium", 15, 1.5);
  const sizeLarge = new Size("Large", 20, 2);
  const sizeGiant = new Size("Giant", 50, 5);
  sizes.addSize(sizeSmall);
  sizes.addSize(sizeMedium);
  sizes.addSize(sizeLarge);
  sizes.addSize(sizeGiant);
}

let toppings = new Toppings();
let sizes = new Sizes();

//Interface Logic

$(document).ready(function () {
  initSizesToppings();
  $(".submit").click(function () {
    const inputSize = sizes.sizeList[$('input[name="size"]:checked').val()];
    const inputToppings = checkedToppings();
    const inputPizza = new Pizza(inputSize, inputToppings);
    let pizzaPrice = inputPizza.getPrice(inputPizza);
    $("#pizza-cost").html("<div id=\"selection\">$" + pizzaPrice + "</div>");
  });
});