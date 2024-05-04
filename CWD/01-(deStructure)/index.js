// const obj = {
//   name: "Arham",
//   roll: 61,
//   sub: ["Bangla", "English", "Math", "Physics"],
// };

// console.log(obj["name"], obj["roll"]);

// const { name, roll, sub } = obj;

// console.log(name, roll, sub);

// const arr = ["Arham", "English", "Math", "Physics"];

// const [, , , d] = arr;

// console.log(d);

const obj = {
  person: {
    name: "Arham",
    gender: "Male",
    mobile: "01884822986",
  },
};

const arr = [
  function add(a, b) {
    return a + b;
  },
];

// const func = ({ person }) => {
//   const { name, gender } = person;
//   console.log(name, gender);
// };
// func(obj);

const func2 = ([addFun]) => {
  //   addFun = arr[0];
  //   const [addFun] = arr;
  console.log(addFun(10, 15));
};
func2(arr);
