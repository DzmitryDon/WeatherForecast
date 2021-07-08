import * as $ from "jquery";
import { USERS_URL } from "../index";
$("#add").on("click", () => sendToServer({ name: $("#input").val() }));

async function sendToServer(user) {
  const request = await fetch(USERS_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(user),
  });
}
