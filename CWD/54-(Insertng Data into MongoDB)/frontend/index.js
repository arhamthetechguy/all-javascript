const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  e.target.name.value = "";
  e.target.email.value = "";
  e.target.password.value = "";

  const userInfo = {
    name,
    email,
    password,
  };

  fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});
