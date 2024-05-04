import loader, { makeUrl, useParams } from "./shared/utilities.js";

const productDetails = document.getElementById("single-product");

function getProductDetails() {
  //show loader
  productDetails.innerHTML = loader();
  
  const { id } = useParams();
  const url = makeUrl(`/product-details/${id}`);

  fetch(url)
    .then((res) => res.json())
    .then((res) => printProductDetails(res));
}

function printProductDetails(products) {
  const { img, price, productId, title, description } = products;
  let htmlCode = "";
  htmlCode += `
           <div id="product-details">
                <img
                  src="${img}"
                />
                <h5 class="pt-3">Product Id : ${productId}</h5>
                <h4 class="py-3 fw-semibold">Price : $${price}</h4>
                <h5 class="py-2">${title}</h5>
                <p>${description}</p>
                <a class="text-decoration-none" href="shippingForm.html?productId=${productId}"><button
                    class="btn btn-dark py-2 px-4 text-center d-block mx-auto fw-medium">Buy Now</button></a>
              </div>
  `;
  productDetails.innerHTML = htmlCode;
}

getProductDetails();
