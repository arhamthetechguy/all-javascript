import { makeUrl } from "./shared/utilities.js";

const addForm = document.getElementById("add-form");

const url = makeUrl("/add-product");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const productId = e.target.productId.value;
  const price = e.target.price.value;
  const img = e.target.img.value;
  const description = e.target.description.value;

  // alert
  const titleDiv = document.getElementById("titleDiv");
  const productIdDiv = document.getElementById("productIdDiv");
  const priceDiv = document.getElementById("priceDiv");
  const imgDiv = document.getElementById("imgDiv");
  const desDiv = document.getElementById("desDiv");
  const submitDiv = document.getElementById("submitDiv");

  // validation
  const titleField = e.target.title;
  const productIdField = e.target.productId;
  const priceField = e.target.price;
  const imgField = e.target.img;
  const descriptionField = e.target.description;


  // Reset previous validation states
  titleField.classList.remove("is-invalid", "is-valid");
  productIdField.classList.remove("is-invalid", "is-valid");
  priceField.classList.remove("is-invalid", "is-valid");
  imgField.classList.remove("is-invalid", "is-valid");
  descriptionField.classList.remove("is-invalid", "is-valid");

  titleDiv.innerHTML = "";
  productIdDiv.innerHTML = "";
  priceDiv.innerHTML = "";
  imgDiv.innerHTML = "";
  submitDiv.innerHTML = "";

  // Check if email, phone number, and name match the expected format
  let valid = true;

  if (!title) {
    titleField.classList.add("is-invalid");
    titleDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please add a title</p></div>`;
    valid = false;
  } else {
    titleField.classList.add("is-valid");
  }

  if (!productId) {
    productIdField.classList.add("is-invalid");
    productIdDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please add a product ID</p></div>`;
    valid = false;
  } else {
    productIdField.classList.add("is-valid");
  }

  if (!price) {
    priceField.classList.add("is-invalid");
    priceDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please enter a price</p></div>`;
    valid = false;
  } else {
    priceField.classList.add("is-valid");
  }

  if (!img) {
    imgField.classList.add("is-invalid");
    imgDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please enter an img URL</p></div>`;
    valid = false;
  } else {
    imgField.classList.add("is-valid");
  }

  if (!description) {
    descriptionField.classList.add("is-invalid");
    desDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please enter an description</p></div>`;
    valid = false;
  } else {
    descriptionField.classList.add("is-valid");
  }

  if (!valid) {
    // Exit if any field is invalid
    return;
  }

  const date = new Date();
  const today = date.toLocaleDateString();

  const productData = {
    date: today,
    title,
    productId,
    price,
    img,
    description
  };

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
      if (res.acknowledged) {
        submitDiv.innerHTML = `<div class="mt-2 text-success"><h6>Product details added Successfully</h6></div>`;
        setTimeout(() => {
          window.location.href = "/frontend/html/dashboard.products.html";
        }, 1000);
      }
    });
});
