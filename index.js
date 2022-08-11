// Ex 1

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];


console.log("here", Object.values(board));

// Ex 2

const doggo = {
  name: "Mina",
  breed: "wolf",
  favFoods: ["bone", "biscuit", "meat"]
}

console.log(doggo.favFoods[1]);



const printFavFood = doggo.favFoods
console.log(printFavFood);

// Ex 3

const recipes = {
  ingredients: {
    butter: "stringOne",
    sugar: "stringTwo",
    flour: "stringThree"
  }
}

recipes.ingredients.ginger = ""
recipes.ingredients.sugar = "brown sugar"
console.log(recipes);

console.log();
console.log(Object.values(recipes.ingredients));
