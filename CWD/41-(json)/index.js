const product = [
  {
    name: "IOS",
    brand: "Apple",
    model: "15 pro max",
    price: "$1500",
    launch: true,
  },
  {
    name: "Android",
    brand: "Samsung",
    model: "s24 ultra",
    price: "$1400",
    launch: true,
  },
  {
    name: "IOS",
    brand: "Apple",
    model: "15 pro max",
    price: "$1500",
    launch: true,
  },
  {
    name: "Android",
    brand: "Samsung",
    model: "s24 ultra",
    price: "$1400",
    launch: true,
  },
];

const jsonData = JSON.stringify(product);
console.log(JSON.parse(jsonData));
