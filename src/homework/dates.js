const dateNow = new Date();
console.log("dateNow", dateNow);

const timeStamp = dateNow.getTime();
console.log("timeStamp", timeStamp);

const localeDate = dateNow.toLocaleDateString();
console.log("localeDate", localeDate);

const localeTime = dateNow.toLocaleTimeString();
console.log("localeTime", localeTime);
