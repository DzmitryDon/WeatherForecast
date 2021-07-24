import {
  forHours,
  changeParametrForHours,
  currentWeather,
  changeParametrCurrWeather,
  dialog,
} from "../index";
import { keypressGetWeather } from "../js/getWeather";

const btnHour = document.getElementById("button-hour");
btnHour.onclick = getWeatherHours;

const searchInputBoxHour = document.getElementById("input-box");
const txt = "Город -- Температура";

function getWeatherHours() {
  if (searchInputBoxHour.value === "") {
    alert("Введите город...");
  } else {
    changeParametrForHours(true);
    changeParametrCurrWeather(false);

    keypressGetWeather(searchInputBoxHour.value);
  }
}

/*const btnCurr = document.getElementById("button-curr");
btnCurr.onclick = getWeatherCurr;

function getWeatherCurr() {
  if (searchInputBoxHour.value === "") {
    alert("Введите город...");
  } else {
    changeParametrForHours(false);
    changeParametrCurrWeather(true);

    keypressGetWeather(searchInputBoxHour.value);
  }
} */

//const dialog = document.querySelector("dialog");
document.querySelector("#show").onclick = function () {
  if (searchInputBoxHour.value === "") {
    alert("Введите город...");
  } else {
    changeParametrForHours(false);
    changeParametrCurrWeather(true);
    keypressGetWeather(searchInputBoxHour.value);

    //dialog.show();
  }
};
document.querySelector("#close").onclick = function () {
  dialog.close();
};
