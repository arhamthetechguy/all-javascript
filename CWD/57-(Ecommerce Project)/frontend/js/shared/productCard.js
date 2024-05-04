import { sliceTitle } from "./utilities.js";

function productCard(product) {
  const { img, title, price, _id } = product;
  const htmlCode = `
  <div id="product-card">
    <img src="${img}" />
    <h6 class="py-3 ">${sliceTitle(title)}</h6>
    <h4 class="pb-2">$${price}</h4>
    <a href="productDetails.html?id=${_id}">
     <button class="btn btn-dark  w-100 p-2">
       View Details
     </button>
     </a>
    </div>
  `;
  return htmlCode;
}
export default productCard;
