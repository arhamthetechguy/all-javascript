const loader = document.getElementById("loader");
const countryList = document.getElementById("country-list");


// function fetchApi() {
//     fetch("https://restcountries.com/v3.1/all")
//         .then((res) => res.json())
//         .then((data) => showCountries(data))
// }
// fetchApi();

async function fetchApi() {
   const response = await fetch("https://restcountries.com/v3.1/all");
   const country = await response.json();
   stopLoader()
   showCountries(country); 
}
fetchApi();

function loadLoader(){
    loader.style.display = "block"
}
function stopLoader(){
    loader.style.display = "none"
}

function showCountries(countries){
    console.log(countries);
    countries.forEach((country) => {
        // console.log(country.name.common);
        countryList.innerHTML += `
        <li>${country.name.common}</li>
        `
    });
}
// showCountries();