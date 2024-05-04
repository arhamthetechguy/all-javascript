// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => {
//     productCard(res);
//     console.log(res);
//   });

// function productCard(productInfo) {
//   const root = document.getElementById("root");

//   productInfo.forEach((value) => {
//     root.innerHTML += htmlCode(value);
//   });

//   function htmlCode(info) {
//     const { email, name, phone, username } = info;
//     const html = `<div id="productCard">
//               <h3>${name}</h3>
//               <h4>${email}</h4>
//               <p>${phone}</p>
//               <h5>${username}</h5>
//           </div>`;
//     return html;
//   }
// }

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((res) => countryList(res));

function countryList(countries) {
  const root = document.getElementById("root");

  let htmlCode = "";

  countries.forEach((country) => {
    htmlCode += resultCountry(country);
    root.innerHTML = htmlCode;
  });

  function resultCountry(country) {
    const { name, flags, population, area, capital } = country;
    const html = `<div id="productCard">
    <h3> Name : ${name.common}</h3>
    <img src="${flags.png}" alt="flag">
    <h5> Capital : ${capital}</h5>
    <p> Population : ${population}</p>
    <p> Area : ${area}</p>
    </div>`;
    return html;
  }
}

// form
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchText = e.target.searchBox.value;
  const searchResult = searchText.toLowerCase();

  fetch(`https://restcountries.com/v3.1/name/${searchResult}`)
    .then((res) => res.json())
    .then((res) => countryList(res));
  e.target.searchBox.value = "";
});
