import loader, {makeUrl} from './shared/utilities.js';
const spinner = document.getElementById("spinner");
const loadOrders = () => {
  //show loader
  spinner.innerHTML = loader();
    const url = makeUrl('/all-orders');
    fetch(url)
    .then(res => res.json())
    .then(res => {printOrders(res)});
}

const printOrders = (orders) => {
    let tableCode = "";
    orders.forEach((order, index) => {
        tableCode += code(order, index);
    })
   document.getElementById("order-table").innerHTML = tableCode;
   
   if (tableCode) {
       spinner.innerHTML= '';
   }
}

const code = (order, index) => {
    const {productId, date, name, phone, email} = order;
    const orderCode = `
    <tr>
    <td scope="row">${index + 1}</td>
        <td>${productId}</td>
        <td>${date}</td>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
    </tr>
        `;
        return orderCode;

}
loadOrders();
