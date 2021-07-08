import cloneDeep from "lodash/cloneDeep.js";

const adress = {
  street: "street street",
  home: 54,
};

const user = {
  name: "Vasya",
  adress,
};

const user2 = {};
for (let key in user) {
  user2[key] = user[key];
}
const user3 = { ...user };
const user4 = JSON.parse(JSON.stringify(user));
const user5 = cloneDeep(user);

user.adress.street = "sesame";
console.log(user);
adress.home = 23;
user.name = "Petya";
console.log(user);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
