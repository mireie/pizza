# Pizza Time

### By Michael Reiersgaard

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Description

A mock-pizzeria website that allows a user to choose a size and toppings and return a price.

## Specs

```
Describe: initSizesToppings();

Test: "It should initialize the pizza toppings and sizes"
Code:  initSizesToppings();
Expected Output: none, the site should be populated with objects for sizes and toppings.
```

```
Describe: checkedToppings()

Test: "It should return an array of all ids of checked toppings"
Code:  checkedToppings();
User Input: Checked: Pepperoni, Mushroom
Expected Output: [1,5]
```

```
Describe: getPrice()

Test: "It should allow a user to pick one topping and one size and output a price"
Code:  getPrice(inputPizza);
inputPizza = [small, pepperoni]
Expected Output: 15
```

```
Test: "It should allow a user to pick one topping and one size and output a price with a modifier for topping price based on size"
Code:  getPrice(large,pepperoni);
Expected Output: 30
```

```
Test: "It should allow a user to pick multiple toppings and one size and output a price"
Code:  getPrice(large,[pepperoni, canadian bacon, pineapple]);
Expected Output: 48
```

```
Test: "It should return the price with two decimals"
Code:  pizza.getPrice(inputPizza);
inputPizza =  (medium,[pepperoni])
Expected Output: 22.50
```

## Setup/Installation Requirements

- Create and enter a directory on your local machine for the project
- Clone public repository from GitHub using `git clone https://github.com/mireie/pizza`
- Open `index.html` to view the web page in your browser

## GitHub Links

- [GitHub Repo](https://github.com/mireie/pizza)
- [GitHub Pages](https://mireie.github.io/pizza/)

## Known Bugs

- No known bugs

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Michael Reiersgaard

## Contact Information

Michael Reiersgaard michael.reiersgaard [at] [gmail.com](http://gmail.com/)