import loader, { makeUrl } from "./shared/utilities.js";

const container = document.getElementById("bslide");
function loadSliders() {
  // show loader
  container.innerHTML = loader();
  const sliderimages = makeUrl("/sliders");

  fetch(sliderimages)
    .then((res) => res.json())
    .then((images) => {
      let index = 0;

      function slide() {
        let htmlCode = "";

        for (let i = 0; i < images.length; i++) {
          if (i === index) {
            htmlCode += `
                <div class="carousel-item active">
                    <img src="${
                      images[i].img
                    }" class="d-block w-100" alt="Slide ${i + 1}" />
                </div>
            `;
          } else {
            htmlCode += `
                <div class="carousel-item">
                    <img src="${
                      images[i].img
                    }" class="d-block w-100" alt="Slide ${i + 1}" />
                </div>
            `;
          }
        }

        container.innerHTML = htmlCode;

        if (index < images.length - 1) {
          index++;
        } else {
          index = 0;
        }
      }

      setInterval(slide, 3000);
    });
}

loadSliders();
