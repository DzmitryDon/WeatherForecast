import { weatherApi } from "../index";
import {
  forHours,
  changeParametrForHours,
  currentWeather,
  changeParametrCurrWeather,
  dialog,
} from "../index";

const searchInputBox = document.getElementById("input-box");

const btnChangeCity = document.getElementById("citySelect");
btnChangeCity.onchange = runCity;

function runCity() {
  const city = document.getElementById("citySelect");
  searchInputBox.value = city.options[city.selectedIndex].value;
  keypressGetWeather(searchInputBox.value);
}

// Event Listener Function on keypress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    if (searchInputBox.value === "") {
      alert("Введите город...");
    } else {
      changeParametrForHours(false);
      changeParametrCurrWeather(false);
      keypressGetWeather(searchInputBox.value);
    }
  }
});

export function keypressGetWeather(val) {
  if (currentWeather) {
    getWeatherReport(val, weatherApi.baseUrlHours);
  } else {
    getWeatherReport(val, weatherApi.baseUrl);
  }
  document.querySelector(".weather-body").style.display = "block";
}

function getWeatherReport(city, webAdress) {
  fetch(`${webAdress}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport)
    .catch((err) =>
      alert(`ВНИМАНИЕ возникла ошибка ${err}. ПОПРОБУЙТЕ поиск заново!`)
    );
}

function showWeatherReport(weather) {
  if (weather.cod === "404" || weather.cod === 404) {
    alert(`ВНИМАНИЕ ответ сервера не получен. ПОПРОБУЙТЕ поиск заново!`);
    return;
  }
  if (currentWeather) {
    if (weather.cod === 200) {
      deletetWeatherForHours();

      const currWeatherText = `Температура: ${Math.round(
        weather.main.temp
      )} *C, \n Давление: ${weather.main.pressure}, \n Влажность: ${
        weather.main.humidity
      }, \n Скорость ветра: ${weather.wind.speed} ,\n  Направление ветра: ${
        weather.wind.deg
      }, \n Погода: ${weather.weather[0].main} \n`;

      const documentСurrWeatherText = document.getElementById(
        "current-weather-text"
      );

      documentСurrWeatherText.innerText = currWeatherText;

      const divCurrPicture = document.createElement("IMG");
      divCurrPicture.className = "weather-curr-pict";
      divCurrPicture.id = "weather-curr-pict";

      divCurrPicture.src = `${weatherApi.imgURL}${weather.weather[0].icon}.png`;
      divCurrPicture.alt = weather.weather[0].main;
      documentСurrWeatherText.appendChild(divCurrPicture);

      dialog.show();
    }
  } else {
    if (weather.cod === "200") {
      if (forHours) {
        const todayDate = new Date();

        const dateCurr = todayDate.getDate();

        const filterCurrDate = `${dateCurr}`;
        const weatherListHours = weather.list.filter((reading) =>
          reading.dt_txt.includes(filterCurrDate)
        );
        const city = weather.city.name;
        const country = weather.city.country;
        deletetWeatherForHours();

        let i = 1;

        weatherListHours.forEach((elem) => {
          const time = elem.dt_txt.substr(11, 5);

          const weatherForHours = `${city}, ${country}, ${time} Температура: ${Math.round(
            elem.main.temp
          )} *C, Давление: ${elem.main.pressure}, Влажность: ${
            elem.main.humidity
          }, Скорость ветра: ${elem.wind.speed} , Направление ветра: ${
            elem.wind.deg
          }, Погода: ${elem.weather[0].main}`;

          const divHours = document.createElement("div");
          divHours.className = `weather-hour-${i}`;
          divHours.id = `weather-hour-${i}`;
          divHours.style.background = "black";
          divHours.style.backgroundColor = "bisque";
          divHours.innerText = weatherForHours;
          document.body.append(divHours);

          const divHoursPic = document.getElementById(`weather-hour-${i}`);

          const divHoursPicture = document.createElement("IMG");
          divHoursPicture.className = `weather-hour-pict${i}`;
          divHoursPicture.id = `weather-hour-pict${i}`;

          divHoursPicture.src = `${weatherApi.imgURL}${elem.weather[0].icon}.png`;
          divHoursPicture.alt = elem.weather[0].main;
          divHoursPic.appendChild(divHoursPicture);

          i++;
        });
      } else {
        const weatherCityName = `${weather.city.name}, ${weather.city.country}`;
        const weatherList = weather.list.filter((reading) =>
          reading.dt_txt.includes("12:00:00")
        );

        const todayDate = new Date().getDate();
        let i = 1;
        weatherList.forEach((element) => {
          const currDate = new Date(element.dt_txt);
          const currDateDay = currDate.getDate();

          if ((currDateDay > todayDate) & (i < 5)) {
            const citydoc = document.getElementById(`city-${i}`);
            citydoc.innerText = weatherCityName;

            const temperaturedoc = document.getElementById(`temp-${i}`);
            temperaturedoc.innerHTML = `${Math.round(element.main.temp)}&deg;C`;

            const datedoc = document.getElementById(`date-${i}`);
            datedoc.innerText = dateManage(currDate);

            const pressdoc = document.getElementById(`press-${i}`);
            pressdoc.innerText = element.main.pressure;

            const humiditydoc = document.getElementById(`humidity-${i}`);
            humiditydoc.innerText = element.main.humidity;

            const windspeeddoc = document.getElementById(`wind-speed-${i}`);
            windspeeddoc.innerText = element.wind.speed;
            const winddegdoc = document.getElementById(`wind-deg-${i}`);
            winddegdoc.innerText = element.wind.deg;

            const weathergdoc = document.getElementById(`weather-${i}`);
            weathergdoc.innerText = element.weather[0].main;

            const imggdoc = document.getElementById(`img-${i}`);
            imggdoc.src = `${weatherApi.imgURL}${element.weather[0].icon}.png`;
            imggdoc.alt = element.weather[0].main;

            i++;
          }
        });
      }
    }
  }
}

function dateManage(dateArg) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = dateArg.getFullYear();
  const month = months[dateArg.getMonth()];
  const date = dateArg.getDate();
  const day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}

function deletetWeatherForHours() {
  for (let i = 0; i < 6; i++) {
    const elemDelete = document.getElementById(`weather-hour-${i}`);
    if (elemDelete !== null) {
      elemDelete.parentNode.removeChild(elemDelete);
    }
  }
}
