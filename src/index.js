import "./js/getSelect";
import "./js/getWeather";
import "./css/style.css";
import "./js/getWeatherHours";

export let forHours = false;
export let currentWeather = false;

export const dialog = document.querySelector("dialog");
export const weatherApi = {
  key: "d9300c4ab4a685ca79f262ab7b4d2339",
  baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
  imgURL: "https://openweathermap.org/img/w/",
  baseUrlHours: "https://api.openweathermap.org/data/2.5/weather",
};

export function changeParametrForHours(valueNew) {
  forHours = valueNew;
}

export function changeParametrCurrWeather(valueNew) {
  currentWeather = valueNew;
}
