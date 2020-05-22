// v1

animals = [{ type: "Dog", mammal: true }, { type: "Snake", mammal: false }, { type: "Cheetah", mammal: true }];
const result = animals.filter((animal) => animal.mammal);
// const result = animals.filter(({ mammal }) => mammal);
console.log(result);


// v2

const section = document.querySelector(".all-animals");
