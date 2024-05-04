import productCard from "./shared/productCard.js";
import loader, { makeUrl } from "./shared/utilities.js";

const url = makeUrl("/all-products");
const spinner = document.getElementById("spinner");

function getAllProducts() {
  //show loader
  spinner.innerHTML = loader();
  fetch(url)
  .then((res) => res.json())
  .then((res) => sendAllProducts(res));
}
getAllProducts();

function sendAllProducts(products) {
  const productsContainer = document.getElementById("all-products");
  let htmlCode = "";
  products.forEach((product) => {
    htmlCode += productCard(product);
  });
  productsContainer.innerHTML = htmlCode;

  // hide loader
  if(htmlCode){
    spinner.innerHTML = "";
  }
}
