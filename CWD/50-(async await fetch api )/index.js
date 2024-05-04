import productCard from "./productCard.js";
console.log(productCard);

// async function loadApi() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();

//   let htmlCode = "";
//   for (let value of data) {
//     htmlCode += productCard(value);
//     document.getElementById("root").innerHTML = htmlCode;
//   }
// }
// loadApi();

async function loadApi() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  let htmlCode = "";
  for (let value of data) {
    htmlCode += productCard(value);
    document.getElementById("root").innerHTML = htmlCode;
  }
}
loadApi();
