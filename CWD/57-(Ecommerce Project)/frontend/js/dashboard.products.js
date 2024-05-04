import loader, { makeUrl, sliceTitle } from "./shared/utilities.js";
document.addEventListener('DOMContentLoaded', function() {
  const url = makeUrl("/all-products");
  const spinner = document.getElementById("spinner");
  const productsContainer = document.getElementById("products-list");

  function deleteProduct(_id) {
    const deleteUrl = makeUrl(`/delete-product/${_id}`);

    fetch(deleteUrl, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        // Product deleted successfully, update product list
        productList();
        // Show alert
        alert('Product has been deleted successfully');
      } else {
        // Handle error
        console.error('Failed to delete product');
      }
    })
    .catch(error => {
      console.error('Error deleting product:', error);
    });
  }

  function productList() {
    // Show loader
    spinner.innerHTML = loader();
    
    // Fetch product data
    fetch(url)
      .then((res) => res.json())
      .then((res) => makeList(res))
      .catch(error => {
        console.error('Error fetching product list:', error);
        spinner.innerHTML = ''; // Hide loader in case of error
      });
  }

  function makeList(products) {
    const totalProducts = document.getElementById("totalProducts");
    totalProducts.innerHTML = "Total = " + products.length;
    
    let htmlCode = "";
    
    products.forEach((product, index) => {
      const { productId, title, price, img, _id } = product;

      htmlCode += `
        <tr>
          <td scope="row" class="align-middle d-table-cell">${index + 1}</td>
          <td class="align-middle d-table-cell">${productId}</td>
          <td class="align-middle d-table-cell">${sliceTitle(title)}</td>
          <td class="align-middle d-table-cell">$${price}</td>
          <td class="align-middle d-table-cell"><img style="max-width: 40px" src="${img}" alt="productimg" /></td>
          <td class="align-middle d-table-cell"><button class="delete-btn btn btn-primary" data-id="${_id}">Delete</button></td>
        </tr>`;
    });
    
    productsContainer.innerHTML = htmlCode;

    // Attach event listener using event delegation
    productsContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const _id = event.target.dataset.id;
        deleteProduct(_id);
      }
    });

    // Hide loader
    spinner.innerHTML = "";
  }

  // Initial load
  productList();
});
