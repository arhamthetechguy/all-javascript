const searchText = window.location.search;
const urlParams = new URLSearchParams(searchText);
const id = urlParams.get("id");

fetch(`http://localhost:5000/details?id=${id}`)
  .then((res) => res.json())
  .then((res) => console.log(res));
