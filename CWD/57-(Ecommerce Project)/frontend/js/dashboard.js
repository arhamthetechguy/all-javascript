import { makeUrl } from "./shared/utilities.js";


const loadReports = () => {
    const url = makeUrl("/reports");
    fetch(url)
        .then(res => res.json())
        .then(res => {
            const { todaysOrder, totalProducts, totalOrders, totalSliders} = res;
            document.getElementById("todaysOrder").innerHTML = todaysOrder;
            document.getElementById("totalProducts").innerHTML = totalProducts;
            document.getElementById("totalOrders").innerHTML = totalOrders;
            document.getElementById("totalSliders").innerHTML = totalSliders;
        });
};
loadReports();