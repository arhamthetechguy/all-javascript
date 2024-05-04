localStorage.setItem("theme", "Dark Theme");

const person = ["Arham", "Azad", "Salim", "Jabbar"];

localStorage.setItem("Person", person);

const obj = {
  name: "Arham",
  gender: "Male",
  address: "Cox's Bazar",
};

localStorage.setItem("userInfo", JSON.stringify(obj));

const userInfo = localStorage.getItem("userInfo");
console.log(JSON.parse(userInfo));

localStorage.removeItem("Person");

// localStorage.clear();
