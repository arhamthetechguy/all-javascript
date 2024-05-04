fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    productCard(res);
    console.log(res);
  });

function productCard(productInfo) {
  const root = document.getElementById("root");

  productInfo.forEach((value) => {
    root.innerHTML += htmlCode(value);
  });

  function htmlCode(info) {
    const { email, name, phone, username } = info;
    const html = `<div id="productCard">
              <h3>${name}</h3>
              <h4>${email}</h4>
              <p>${phone}</p>
              <h5>${username}</h5>
          </div>`;
    return html;
  }
}

// // selectors
// const form = document.getElementById("form");
// const inputBox = document.getElementById("inputBox");
// const rootDiv = document.getElementById("root");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const searchBox = e.target.searchBox.value.toLowerCase();
//   if (searchBox === "") {
//     alert("Please enter a product name");
//     return;
//   }
//   const searchResult = product.filter((value) => {
//     const searchedText = value.productName.toLowerCase();
//     return searchedText.includes(searchBox);
//   });

//   let html = "";
//   searchResult.forEach((product) => {
//     const code = productCard(product);
//     html += code;
//   });
//   rootDiv.innerHTML = html;
//   inputBox.value = "";
// });

// function productCard(productInfo) {
//   const { productName, productUrl, price, description } = productInfo;
//   const htmlCode = `
//   <div id="productCard">
//     <img
//         src="${productUrl}"></
//     />
//     <h3>${price}</h3>
//     <h4>${productName}</h4>
//     <p>${description}</p>

//     <a href="${productUrl}" target="_blank" rel="noopener noreferrer"><button>Product Details</button></a>
// </div>
//     `;

//   return htmlCode;
// }
