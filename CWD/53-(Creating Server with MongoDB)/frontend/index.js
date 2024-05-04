async function loadApi() {
  const res = await fetch("http://localhost:4000/productlist");
  const data = await res.json();
  //   console.log(data);

  for (let value of data) {
    console.log(value);
  }
}
loadApi();
