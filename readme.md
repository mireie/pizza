# Pizza Time

#### By Michael Reiersgaard

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery

## Description

A mock-pizzeria website that allows a user to choose a size and toppings and return a price.

## Specs

```
Describe: displayToppings(toppings)

Test: "It should display a list of ingredients that are stored in an object"
Code:  displayToppings(toppings);
Expected Output: <ul> of all ingredients
```

```
Describe: displaySizes(toppings)

Test: "It should display a list of sizes that are stored in an object"
Code:  displaySizes();
Expected Output: <ul> of all sizes
```

```
Describe: buildAPizza()

Test: "It should allow a user to pick one topping and one size and output a price"
Code:  buildAPizza(small,pepperoni);
Expected Output: 15
```

```
Test: "It should allow a user to pick one topping and one size and output a price with a modifier for topping price based on size"
Code:  buildAPizza(large,pepperoni);
Expected Output: 30
```
```
Test: "It should allow a user to pick multiple toppings and one size and output a price"
Code:  buildAPizza(large,[pepperoni, canadian bacon, pineapple]);
Expected Output: 48
```

```
Test: "It should allow a user to pick multiple toppings and one size and output a price"
Code:  buildAPizza(large,[pepperoni, canadian bacon, pineapple]);
Expected Output: 48
```

```
Describe: checkedToppings()

Test: "It should return an array of all ids of checked toppings"
Code:  checkedToppings();
Expected Output: [1,2...]
```

## Setup/Installation Requirements

- Create and enter a directory on your local machine for the project
- Clone public repository from GitHub using `git clone https://github.com/mireie/pizza`
- Open `index.html` to view the web page in your browser

## GitHub Links
- [GitHub Repo](https://github.com/mireie/pizza)
- [GitHub Pages](https://mireie.github.io/pizza/)

## Known Bugs

* Currently only functional in the console.

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Michael Reiersgaard


## Contact Information

Michael Reiersgaard michael.reiersgaard [at] gmail.com