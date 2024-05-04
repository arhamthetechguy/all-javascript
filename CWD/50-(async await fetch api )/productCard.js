const productCard = (receiveProduct) => {
  const { title, image, price, description } = receiveProduct;

  return `
  <div class="productCard" >
    <h2>${title.length > 20 ? title.slice(0, 30) + "..." : title}</h2>
    <img src="${image}" alt="">
    <h3>${price}</h3>
    <p>${
      description.length > 150 ? description.slice(0, 150) + "..." : description
    }</p>
  </div>
  `;
};
export default productCard;
