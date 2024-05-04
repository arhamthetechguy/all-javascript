import loader, { makeUrl, sliceTitle } from "./shared/utilities.js";
document.addEventListener("DOMContentLoaded", function () {
  const url = makeUrl("/sliders");
  const spinner = document.getElementById("spinner");
  const sliderContainer = document.getElementById("slider-list");

  function deleteSlider(_id) {
    const deleteUrl = makeUrl(`/delete-slider/${_id}`);

    fetch(deleteUrl, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // slider deleted successfully, update slider list
          sliderList();
          // Show alert
          alert("slider has been deleted successfully");
        } else {
          // Handle error
          console.error("Failed to delete slider");
        }
      })
      .catch((error) => {
        console.error("Error deleting slider:", error);
      });
  }

  function sliderList() {
    // Show loader
    spinner.innerHTML = loader();

    // Fetch slider data
    fetch(url)
      .then((res) => res.json())
      .then((res) => makeList(res))
      .catch((error) => {
        console.error("Error fetching slider list:", error);
        spinner.innerHTML = ""; // Hide loader in case of error
      });
  }

  function makeList(sliders) {
    const totalSlider = document.getElementById("totalSliders");
    totalSlider.innerHTML = "Total = " + sliders.length;

    let htmlCode = "";

    sliders.forEach((slider, index) => {
      const { img, _id } = slider;

      htmlCode += `
        <tr>
          <td scope="row" class="align-middle d-table-cell">${index + 1}</td>
          <td class="align-middle d-table-cell"><img style="max-width: 150px" src="${img}" alt="productimg" /></td>
          <td class="align-middle d-table-cell"><button class="delete-btn btn btn-primary" data-id="${_id}">Delete</button></td>
        </tr>`;
    });

    sliderContainer.innerHTML = htmlCode;

    // Attach event listener using event delegation
    sliderContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-btn")) {
        const _id = event.target.dataset.id;
        deleteSlider(_id);
      }
    });

    // Hide loader
    spinner.innerHTML = "";
  }

  // Initial load
  sliderList();
});
