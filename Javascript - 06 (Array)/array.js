// const array1 = ["Arham","Karim",];
// const array2 = ["Mojid"];

// console.log(array1.concat(array2));

// let animals = ["Cat", "Bird", "Dog", "Tiger", "Lion", "Cow"];
// let newAnimals = animals.slice(2, 3);

// console.log(newAnimals);


// let animals = ["Cat", "Bird", "Dog", "Tiger", "Lion", "Cow"];
// animals.splice(2, 1, 3);

// console.log(animals);

// let anilmals = ["Cat", "Bird", "Dog", "Tiger", "Lion", "Cow"];
// let animalsSort = anilmals.sort()
// console.log(animalsSort);

// let numList = [12, 11, 5, 10, 20, 20, 30, 50, 7];
// let newNumList = numList.sort((a, b) => a - b);
// console.log(newNumList);

// let numList = [21, 5, 4, 9, 15, 22, 3, 30, 19, 55];
// let newNumList = numList.sort((a, b) => b - a);
// console.log(newNumList);

// let employees = [
// {Name: "Arham", Age: 21},
// {Name: "Rahim", Age: 24},
// {Name: "Karim", Age: 26},
// {Name: "Salam", Age: 20},
// {Name: "Rafique", Age: 16},
// {Name: "Jobbar", Age: 18},
// ]

// console.log(employees.sort((a, b) => b.Age - a.Age));


// let anilmals = ["Cat", "Bird", "Dog", "Tiger", "Lion", "Cow"];
// // anilmals.forEach((x) => console.log(x));
// for (i=1; i < anilmals.length; i++){
//     console.log(anilmals[i]);
// }

// let employees = [
//     {Name: "Arham", Age: 21},
//     {Name: "Rahim", Age: 24},
//     {Name: "Karim", Age: 26},
//     {Name: "Salam", Age: 20},
//     {Name: "Rafique", Age: 16},
//     {Name: "Jobbar", Age: 18},
//     ]

//     employees.forEach((employees) => console.log(employees.Name, employees.Age));

// let employees = [
//     {Name: "Arham", Age: 21},
//     {Name: "Rahim", Age: 24},
//     {Name: "Karim", Age: 26},
//     {Name: "Salam", Age: 20},
//     {Name: "Rofique", Age: 16},
//     {Name: "Jobbar", Age: 18},
//     ]

//     employees.map((employees) => console.log(employees.Name, employees.Age));

// let numList = [21, 5, 4, 9, 15, 22, 3, 30, 19, 55];
// let evenNumber = numList.filter((number => number % 2 === 0));

// console.log(evenNumber);

// let filterEmployees = employees.filter((employees) => employees.Age > 20);

// console.log(filterEmployees);

// let anilmals = ["Cat", "Bird", "Dog", "Tiger", "Lion", "Cow"];
// let searchAnimal = anilmals.includes("Bird");

// console.log(searchAnimal);




// // ===============================//
let employees = [
    {Name: "Arham", Age: 21},
    {Name: "Rahim", Age: 24},
    {Name: "Karim", Age: 26},
    {Name: "Salam", Age: 20},
    {Name: "Rafique", Age: 16},
    {Name: "Jobbar", Age: 18},
    ]
let filterEmployees = employees.filter((employees) => employees.Age > 20);

console.log(filterEmployees);