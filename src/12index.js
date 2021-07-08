import { connectToDom } from "./dom/index";

connectToDom();
const URL = "http://localhost:3033/users";
// async function showUsers() {
//   const users = await getUsers();

//   const usersNames = users.map((user) => user.name + "<br> ");
//   document.getElementById("users").innerHTML = usersNames;
//   console.dir(users);
//   count();
// }

// async function getUsers() {
//   const usersResp = await fetch(URL);
//   const users = await usersResp.json();
//   return users;
// }

// function count() {
//   let i = 0;

//   let start = Date.now();
//   // делаем тяжёлую работу
//   for (let j = 0; j < 1e10; j++) {
//     i++;
//   }

//   console.log("Done in " + (Date.now() - start) + "ms");
// }

// count();

// const updateData = async (id, name) => {
//   const url = `${URL}/${id}`;
//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify({ name }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();

//     return json;
//   } catch (error) {
//     console.error("Ошибка:", error);
//   }
// };

// const deleteData = async (id) => {
//   const url = `${URL}/${id}`;
//   try {
//     const response = await fetch(url, {
//       method: "DELETE",
//     });
//     const json = await response.json();

//     return json;
//   } catch (error) {
//     console.error("Ошибка:", error);
//   }
// };

const sheet = document.getElementById("sheet");

const showUsers = async () => {
  const usersPromise = fetch(URL);
  usersPromise
    .then((response) => response.json())
    .then((users) => {
      console.log("🚀 ~ file: index.js ~ line 91 ~ showUsers ~ users", users);
      const arr = [];

      users.forEach((i) => {
        let userName = sheet.appendChild(document.createElement("p"));
        userName.innerText = `${i.sendUser}`;
      });

      // await delay(1000);
    });
};

async function showUsers0() {
  const response = await fetch(URL);
  const users = await response.json();

  const arOfNames = [];
  for (const { name } of users) {
    arOfNames.push(name);
  }

  const usersNames = users.map(({ name }) => name);
  // const usersNames = users.map((user) => user.name);
}

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayInms);
  });
}

/* function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
} */

function deleteData(id) {
  fetch(`${URL}/${id}`, {
    method: "DELETE",
  }).then(() => {
    console.log("remove");
  });
}

document.getElementById("show").onclick = showUsers;

document.getElementById("delete").onclick = () => {
  for (let i = 8; i < 20; i++) {
    deleteData(i);
  }
};

document.getElementById("update").onclick = () =>
  updateData(8, document.getElementById("input").value);

async function updateData(id, newName) {
  const updatedObj = {
    id: id,
    name: newName,
  };
  await fetch(`${URL}/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObj),
  });
}
