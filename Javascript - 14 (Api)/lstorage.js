// const itemFom = document.getElementById("item-form")
// const inputItem = document.getElementById("input-item");
// const addItem = document.getElementById("add-item");
// const filterItem = document.getElementById("filtering-item");
// const itemList = document.getElementById("item-list");
// const pushItem = document.getElementById("added-item");
// // const removeItem = document.getElementById("remove-item");
// const clearBtn = document.getElementById("clear-btn");
// const tableContainer = document.getElementById("table-container");
// const filteringItem = document.getElementById("filtering-item");

// let count = 1;

// function addNewItem(e){
//     e.preventDefault();

//     const newItem = inputItem.value;

//     if(newItem === "" ){
//         alert("Please add an item!")
//         return;
//     }

//     pushItem.innerHTML += `
//     <tr class="item" >
//          <th scope="row">${count}</th>
//          <td>${newItem}</td>
//         <td><button class="remove-item" id="remove-item" ><i class="bi bi-trash3-fill remove-item"></i></button></td>
//      </tr>
//     `
//     inputItem.value = "";
//     checkInterface();
//     count++;
// }

// function removeItem(e){
//     if(e.target.classList.contains("remove-item")){
//         e.target.parentElement.parentElement.parentElement.remove();
//     }
//     checkInterface();
// }

// function filterAnItem(e){
//     const items = document.querySelectorAll(".item");
//     const searchTex = e.target.value.toLowerCase();

//     items.forEach((item) => {
//        const itemName = item.children[1].textContent.toLocaleLowerCase();
        
//         if (itemName.indexOf(searchTex) !== -1 ){
//             item.style.display = "";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

// function checkInterface(){
//     const items = document.querySelectorAll(".item");

//     if (items.length === 0){
//         tableContainer.style.display = "none";
//     } else {
//         tableContainer.style.display = "Block";
//     }
// }


// function clearAll(){
//     pushItem.innerHTML = "";
//     checkInterface();
// }


// itemFom.addEventListener("submit", addNewItem);
// pushItem.addEventListener("click", removeItem);
// clearBtn.addEventListener("click", clearAll);
// filterItem.addEventListener("input", filterAnItem);
// checkInterface();


const itemFom = document.getElementById("item-form")
const inputItem = document.getElementById("input-item");
const filterItem = document.getElementById("filtering-item");
const itemList = document.getElementById("item-list");
const pushItem = document.getElementById("added-item");
const clearBtn = document.getElementById("clear-btn");
const tableContainer = document.getElementById("table-container");
const filteringItem = document.getElementById("filtering-item");


let count = 1;

// function
function addNewItem(e){
    e.preventDefault();

    const newItem = inputItem.value;

    if (newItem === ""){
        alert("Please add an item!")
        return;
    }
    pushItem.innerHTML += `
    <tr class="item" >
        <th scope="row">${count}</th>
        <td>${newItem}</td>
        <td><button class="remove-item" id="remove-item" ><i class="bi bi-trash3-fill remove-item"></i></button></td>
    </tr>
    `
    inputItem.value = "";
    count++;
    checkInterface();
}

function removeItem(e){
    if(e.target.classList.contains("remove-item")){
        e.target.parentElement.parentElement.parentElement.remove();
    }
    checkInterface();
}

function filterAnItem(e){
    const items = document.querySelectorAll(".item");
    const searchText = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemname = item.children[1].textContent.toLowerCase();

        if (itemname.indexOf(searchText) !== -1){
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

function checkInterface(){
    const items = document.querySelectorAll(".item");

    if (items.length === 0){
        tableContainer.style.display = "none";
    } else {
        tableContainer.style.display = "block";
    }
}

function clearAll(){
    pushItem.innerHTML = "";
    filteringItem.value = "";
    checkInterface();
}


itemFom.addEventListener("submit", addNewItem);
pushItem.addEventListener("click", removeItem);
filteringItem.addEventListener(("input"), filterAnItem);
clearBtn.addEventListener("click", clearAll);
checkInterface();