import * as $ from "jquery";
import { showUsers, users } from "../index";

$("#filter").on("click", () => filterUsers($("#input").val(), users));

function filterUsers(filter, usersArr) {
  console.log(usersArr);
  const filterArrUsers = usersArr.filter((user) => user.name === filter);
  showUsers(filterArrUsers);
  console.log(filterArrUsers);
}

async function deleteUser(id) {
  const request = await fetch(`${USERS_URL}/${id}`, {
    method: "DELETE",
  });
  if (request.ok) {
    showUsers();
  }
}
