import * as $ from "jquery";
$("#add").on("click", () => console.log(123));

const USERS_URL = "http://localhost:3033/users";

async function showUsers() {
  const users = await getUsers();
  const usersNames = users.map((user) =>
    $(`<div>${user.name}</div>`).on("click", () => console.log(user.name))
  );
  $("#users").append(usersNames);
  console.log(users);
}

async function getUsers() {
  const response = await fetch(USERS_URL);
  const users = await response.json();
  return users;
}

document.getElementById("show").onclick = () => showUsers();
