const auth = '563492ad6f91700001000001d078b85107394755986b91bedc880a91';
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const galleryWrapper = document.getElementById("gallery-wrapper");
let searchValue;


// functions
// function curatedPhotos(){
//     fetch("https://api.pexels.com/v1/curated?per_page=20", {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             authorization: auth
//         }
//     })
//         .then((res) => res.json())
//         .then((data) =>showPhotos(data));
// }
// curatedPhotos();

// function showPhotos(photos){
//     let allPhotos = photos.photos;
//     allPhotos.forEach(photos => {
//     galleryWrapper.innerHTML += `
//     <div class="images-gallery">
//         <img src="${photos.src.large}" alt="">
//         <a href="${photos.src.original}" target="_blank" rel="noopener noreferrer">Download</a>
//         <p>${photos.photographer}</p>
//     </div>
//     `
//     });
// }

// function searchPhotos(query){
//     fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=5`, {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             authorization: auth
//         }
//     })
//         .then((res) => res.json())
//         .then((data) => displaySearch(data));
// }
// searchPhotos();

// function displaySearch(query){
//     let allPhotos = query.photos;
//     allPhotos.forEach(query => {
//     galleryWrapper.innerHTML += `
//     <div class="images-gallery">
//         <img src="${query.src.large}" alt="">
//         <a href="${query.src.original}" target="_blank" rel="noopener noreferrer">Download</a>
//         <p>${query.photographer}</p>
//     </div>
//     `
//     });
// }

// searchInput.addEventListener("input", updateSearch);
// function updateSearch(e){
//     searchValue = e.target.value;
// }

// searchForm.addEventListener("submit", (e)=> {
//     galleryWrapper.innerHTML = "";
//     searchInput.value = "";
//     e.preventDefault();
//     searchPhotos(searchValue);
// })

function curatedPhotos(){
   fetch("https://api.pexels.com/v1/curated?per_page=10", {
    method: "GET",
    headers: {
        accept: "application/json",
        authorization: auth
    }
   })
        .then((res) => res.json())
        .then((data) => showPhotos(data))
}
curatedPhotos();

function showPhotos(photos){
    let allPhotos = photos.photos
    allPhotos.forEach(photos => {
        console.log(photos);
    galleryWrapper.innerHTML += `
    <div class="images-gallery">
    <img src="${photos.src.large}" alt="">
    <a href="${photos.src.original}" target="_blank" rel="noopener noreferrer">Download</a>
    <p>${photos.photographer}</p>
</div> 
    `
    });
}

function searchPhotos(query){
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
        method: "GET",
        headers: {
            accept: "application/json",
            authorization: auth
        }
    })
        .then((res) => res.json())
        .then((data) => displaySearch(data));
}
// searchPhotos();

function displaySearch(query){
    let allPhotos = query.photos;
    allPhotos.forEach(query => {
    galleryWrapper.innerHTML += `
    <div class="images-gallery">
        <img src="${query.src.large}" alt="">
        <a href="${query.src.original}" target="_blank" rel="noopener noreferrer">Download</a>
        <p>${query.photographer}</p>
    </div>
    `
    });
}

searchInput.addEventListener("input", updateSearch)

function updateSearch(e){
    searchValue = e.target.value;
}

searchForm.addEventListener("submit", (e)=> {
    galleryWrapper.innerHTML = "";
    searchInput.value = "";
    e.preventDefault()
    searchPhotos(searchValue)
})