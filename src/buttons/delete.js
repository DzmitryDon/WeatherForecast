import * as $ from "jquery";
import { USERS_URL, showUsers } from "../index";

export const createDeleteButton = (id) =>
  $("<button>5</button>").on("click", () => deleteUser(id));

async function deleteUser(id) {
  const request = await fetch(`${USERS_URL}/${id}`, {
    method: "DELETE",
  });
  if (request.ok) {
    showUsers();
  }
}
