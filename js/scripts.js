//Biz Logic for Pizzas
function Pizzas() {
  this.pizzaList = {};
  this.currentId = 0;
}

Pizzas.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Pizzas.prototype.findPizza = function (id) {
  if (this.pizzaList[id] != undefined) {
    return this.pizzaList[id];
  }
  return false;
}

//Biz Logic for Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getPrice = function (size, toppings) {
  sizePrice = size.sizeBasePrice;
  let toppingsPrice = 0;
  Object.keys(toppings).forEach(function (key) {
    toppingsPrice += toppings[key].basePrice * size.multiplier;
  });
  const price = sizePrice + toppingsPrice;
  return price;
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

Toppings.prototype.findTopping = function (id) {
  if (this.toppingList[id] != undefined) {
    return this.toppingList[id];
  }
  return false;
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

Sizes.prototype.findSize = function (id) {
  if (this.sizeList[id] != undefined) {
    return this.sizeList[id];
  }
  return false;
}

function displaySizes(sizes) {
  let sizeList = $("ul#sizes");
  let htmlForSizeInfo = "";
  Object.keys(sizes.sizeList).forEach(function (key) {
    const size = sizes.findSize(key);
    htmlForSizeInfo += "<li id=" + size.id + ">" + size.size + "</li>"
  });
  sizeList.html(htmlForSizeInfo);
}

//Biz Logic for Size
function Size(size, sizeBasePrice, multiplier) {
  this.size = size;
  this.sizeBasePrice = sizeBasePrice;
  this.multiplier = multiplier;
}

function checkedToppings() {
  let selectedToppings = [];
  $(".form-check-input:checkbox:checked").each(function () {
    selectedToppings.push($(this).val());
    return selectedToppings;
  })
}

//Create toppings and sizes
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
let pizzas = new Pizzas();

//Interface Logic

$(document).ready(function () {
  initSizesToppings();
  displayToppings(toppings);
  displaySizes(sizes);
  $(".submit").click(function () {
    const inputSize = $('input[name="size"]:checked').val();
    let pizza = new Pizza(inputSize, checkedToppings());
    let pizzaPrice = pizza.getPrice();
    console.log(pizzaPrice);

  });
});
