import productCard from "./shared/productCard.js";
import loader, { makeUrl } from "./shared/utilities.js";

const url = makeUrl("/latest-products");
const spinner = document.getElementById("spinner");

function loadProducts() {
  //show loader
  spinner.innerHTML = loader();

  fetch(url)
    .then((res) => res.json())
    .then((res) => printProducts(res));
}
loadProducts();

function printProducts(prodcuts) {
  const latesProduct = document.getElementById("latest-product");
  let htmlCode = "";
  prodcuts.forEach((product) => {
    htmlCode += productCard(product);
  });
  latesProduct.innerHTML = htmlCode;

  // hide loader
  if (htmlCode) {
    spinner.innerHTML = "";
  }
}
