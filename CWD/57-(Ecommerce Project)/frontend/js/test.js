import helpFun from "./shared/helper.js";

// helpFun.get("https://jsonplaceholder.typicode.com/users");
//   .then((data) => console.log(data));

// const data = {
//   name: "Arham",
//   gender: "Male",
//   age: "21",
// };

// helpFun
//   .post("https://jsonplaceholder.typicode.com/posts/1", data)
//   .then((data) => console.log(data));

const number = [5, 10, 15, 20, 25, 50, 20, 60, 80];

// helpFun.forEach(number, (value, index, number) =>
//   console.log(value, index, number)
// );

// const mapResult = helpFun.map(number, (value, index, number) => {
//   return number;
// });
// console.log(mapResult);

try {
  //   helpFun
  //     .gets("https://jsonplaceholder.typicode.com/users")
  //     .then((data) => console.log(data));
  const mapResult = helpFun.map(number, (value, index, number) => {
    return number;
  });
  console.log(mapResult);
} catch (err) {
  console.log("error found", err);
}

console.log("hello world");
