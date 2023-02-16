
const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const repeatPassword = document.getElementById("repeatPasswordInput");

const allUsers = JSON.parse(localStorage.getItem("AllUsers")) || [];

function register() {
  const checkUser = allUsers.some((user) => user.email === email.value);
  if (checkUser) {
    return alert("Email ja cadastrado");
  }
  if (password.value != repeatPassword.value) {
    return alert("Senhas estao diferentes.");
  }
  const newUser = {
    email: email.value,
    password: password.value,
    logged: false,
    errands: [],
  };
  allUsers.push(newUser);
  console.log(allUsers);

  saveOnStorage();
  window.location.href = "index.html";
}

function saveOnStorage() {
  localStorage.setItem("AllUsers", JSON.stringify(allUsers));
}
