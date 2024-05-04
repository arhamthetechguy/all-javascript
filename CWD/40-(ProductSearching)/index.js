const product = [
  {
    id: 1,
    productName:
      "iphone 15 Pro Max 256GB/512GB/1TB (USA-LL/A) Smartphone- Unofficial",
    productUrl:
      "https://static-01.daraz.com.bd/p/a5947ead10e6720ca29a905c44019748.jpg_300x0q75.webp",
    price: 1500,
    description:
      "Brand: Apple Model: iPhone 15 Pro Max Display Size: 6.7 inches Display Type: LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000–2000 nits",
  },
  {
    id: 2,
    productName: "Realme C53 (6/128) Smart Phones",
    productUrl:
      "https://static-01.daraz.com.bd/p/c2e06e98b411adaa5bbe26826c9461df.jpg_300x0q75.webp",
    price: 300,
    description:
      " NO RETURN applicable if the seal is broken Processor: Octa-core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) Chipset: Unisoc Tiger T612 (12 nm)",
  },
  {
    id: 3,
    productName:
      "Samsung Galaxy S23 Ultra 5G 12GB Ram and 256GB/512GB Rom Smartphone - Unofficial",
    productUrl:
      "https://static-01.daraz.com.bd/p/4581c5b81113b770fd2d1d92447bcb99.jpg_300x0q75.webp",
    price: 1400,
    description:
      " NO RETURN applicable if the seal is broken Processor: Octa-core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) Chipset: Unisoc Tiger T612 (12 nm)",
  },
  {
    id: 4,
    productName: "Infinix Smart 8(4/128GB)",
    productUrl:
      "https://static-01.daraz.com.bd/p/a8f0c5c90dc7a8c2d29987cace98605d.jpg_300x0q75.webp",
    price: 250,
    description:
      " NO RETURN applicable if the seal is broken Processor: Octa-core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) Chipset: Unisoc Tiger T612 (12 nm)",
  },
  {
    id: 5,
    productName: "Redmi Note 12 4G (6GB/64GB) Unofficial",
    productUrl:
      "https://static-01.daraz.com.bd/p/594ec78b73735d795d65591da7dd9dbc.jpg_300x0q75.webp",
    price: 200,
    description:
      " NO RETURN applicable if the seal is broken Processor: Octa-core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) Chipset: Unisoc Tiger T612 (12 nm)",
  },
];

// selectors
const form = document.getElementById("form");
const inputBox = document.getElementById("inputBox");
const rootDiv = document.getElementById("root");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchBox = e.target.searchBox.value.toLowerCase();
  if (searchBox === "") {
    alert("Please enter a product name");
    return;
  }
  const searchResult = product.filter((value) => {
    const searchedText = value.productName.toLowerCase();
    return searchedText.includes(searchBox);
  });

  let html = "";
  searchResult.forEach((product) => {
    const code = productCard(product);
    html += code;
  });
  rootDiv.innerHTML = html;
  inputBox.value = "";
});

function productCard(productInfo) {
  const { productName, productUrl, price, description } = productInfo;
  const htmlCode = `
  <div id="productCard">
    <img
        src="${productUrl}"></
    />
    <h3>${price}</h3>
    <h4>${productName}</h4>
    <p>${description}</p>

    <a href="${productUrl}" target="_blank" rel="noopener noreferrer"><button>Product Details</button></a>
</div>
    `;

  return htmlCode;
}
