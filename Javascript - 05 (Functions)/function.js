// FUNCTIONS

// function count(countStart, CountEnd){
//     for (let count = countStart; count <= CountEnd; count++){
//         return countStart, CountEnd;
//     }
// }

// count(1, 10);
// console.log(count(1, 10));

// function add(num1, num2){
//     return num1 + num2;
// }

// let addition = add(10, 200);
// console.log(addition);



// OBJECTS
// const student = {
//     userName: "Arham",
//     age: "21",
//     college: "CGC GOVT College",
//     isAdmitted: function (){
//         console.log(`${this.userName} is admitted to ${this.college}`);
//     }
// }
// // console.log(student.userName, student.age, student.college);
// // console.log(student["userName"], student["age"]);
// student.isAdmitted();


//ARRAY
// let fruits = ["Mango", "Banana", "Lichi", "Strawberry", "Apple" ];

// console.log(fruits);
// console.log(fruits[3]);
// console.log(fruits.indexOf("Lichi"));

// fruits.pop();
// fruits.shift();
// fruits.push("Wood Apple")
// fruits.unshift("Black Berry");
// console.log(fruits);

function loopCounting(countStart, countEnd){
    for (let count = countStart; count <= countEnd; count++){
        if (count % 2 === 0){
            console.log("Even Number:", count);
        } else {
            console.log("Odd number:", count);        
        }
    }
}
loopCounting(1, 100);


