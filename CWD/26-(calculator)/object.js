// let info = [
//   {
//     name: "Arham",
//     age: 21,
//     gender: "male",
//     sub: ["Bangla", "English", "Math"],
//     friends: [
//       {
//         name: "Riyad",
//         address: "Goalia",
//         gender: "male",
//         isMarried: false,
//         friends: ["Arham", "Riyad", "Golam Hossain", "Ajom"],
//       },
//       {
//         name: "Riyad",
//         address: "Goalia",
//         gender: "male",
//         isMarried: false,
//         friends: ["Arham", "Riyad", "Golam Hossain", "Ajom"],
//       },
//     ],
//   },
//   {
//     name: "Kajol",
//     age: 21,
//     gender: "male",
//     sub: ["Bangla", "English", "Math"],
//     friends: [
//       {
//         name: "Riyad",
//         address: "Goalia",
//         gender: "male",
//         isMarried: false,
//         friends: ["Arham", "Riyad", "Golam Hossain", "Ajom"],
//       },
//       {
//         name: "Riyad",
//         address: "Goalia",
//         gender: "male",
//         isMarried: false,
//         friends: ["Arham", "Riyad", "Golam Hossain", "Ajom"],
//       },
//     ],
//   },
//   {
//     name: "Rahim",
//     age: 21,
//     gender: "male",
//     sub: ["Bangla", "English", "Math"],
//     friends: [
//       {
//         name: "Riyad",
//         address: "Goalia",
//         gender: "male",
//         isMarried: false,
//         friends: ["Arham", "Riyad", "Golam Hossain", "Ajom"],
//       },
//       {
//         name: "Riyad",
//         address: "Goalia",
//         gender: "male",
//         isMarried: false,
//         friends: [
//           "Arham",
//           "Riyad",
//           "Golam Hossain",
//           "Ajom",
//           {
//             name: "Jafry",
//             addess: "Cox's Bazar",
//           },
//         ],
//       },
//     ],
//   },
// ];

// console.log(info[2].friends[1].friends[4].addess);

let products = [
  {
    id: "abc123",
    name: "Monitor",
    price: "10,000",
  },
  {
    id: "abc124",
    name: "Mouse",
    price: "200",
  },
  {
    id: "abc125",
    name: "Keyboard",
    price: "500",
  },
  {
    id: "abc126",
    name: "Pad",
    price: "100",
  },
  {
    id: "abc127",
    name: "Cable",
    price: "150",
  },
];

let search = "abc127";

for (let i = 0; i < products.length; i++) {
  let product = products[i];

  if (product.id === search) {
    console.log(product.name);
  }
}
