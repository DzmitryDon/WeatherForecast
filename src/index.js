import * as $ from "jquery";
import "./buttons/add";
import { createDeleteButton } from "./buttons/delete";
export const USERS_URL = "http://localhost:3033/users";

export async function showUsers() {
  const users = await getUsers();
  const usersNames = users.map((user) =>
    $(`<div>${user.name}</div>`).addClass("className").append(createDeleteButton(user.id))
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
