const form = document.getElementById("form");
const rootDiv = document.getElementById("root");
const inputTitle = document.getElementById("productTitle");
const inputURL = document.getElementById("productURL");
const inputDetailsURL = document.getElementById("productDetailsURL");
const inputDes = document.getElementById("productDes");

function product(info) {
  let productCard = `
    <div id="productCard">
        <img
          src="${info.productURL}"
          alt="product Chaad"
        />
        <h3>${info.productTitle}</h3>
        <p>${info.productDes}</p>
        <a href="${info.productDetailsURL}" target="_blank" rel="noopener noreferrer"
          ><button>Product Details</button></a
        >
      </div>
    `;
  return productCard;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productTitle = e.target.productTitle.value;
  let productURL = e.target.productURL.value;
  let productDetailsURL = e.target.productDetailsURL.value;
  let productDes = e.target.productDes.value;

  let productInfo = {
    productTitle,
    productURL,
    productDetailsURL,
    productDes,
  };
  if (productTitle == "") {
    alert("Please type a product title");
  } else if (productURL == "") {
    alert("Please type a product URL");
  } else if (productDetailsURL == "") {
    alert("Please add product details URL");
  } else if (productDes == "") {
    alert("Please type a product description");
  }

  let productBody = product(productInfo);
  rootDiv.innerHTML += productBody;

  inputTitle.value = "";
  inputURL.value = "";
  inputDetailsURL.value = "";
  inputDes.value = "";
});
