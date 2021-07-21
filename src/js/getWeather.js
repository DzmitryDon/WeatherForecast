// https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=<your-api-key>&cnt=5
//"https://api.openweathermap.org/data/2.5/weather"
const weatherApi = {
  key: "d9300c4ab4a685ca79f262ab7b4d2339",
  baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
  imgURL: "https://openweathermap.org/img/w/",
};

const searchInputBox = document.getElementById("input-box");

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
      keypressGetWeather(searchInputBox.value);
    }
  }
});

function keypressGetWeather(val) {
  getWeatherReport(val);
  document.querySelector(".weather-body").style.display = "block";
}

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

function showWeatherReport(weather) {
  const weatherCityName = `${weather.city.name}, ${weather.city.country}`;

  const weatherList = weather.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );
  console.log(weatherList);

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

  ////

  /////

  /* if (weatherType.textContent === "Clear") {
    document.body.style.backgroundImage = "url('img/clear.jpg')";
  } else if (weatherType.textContent === "Clouds") {
    document.body.style.backgroundImage = "url('img/cloud.jpg')";
  } else if (weatherType.textContent === "Haze") {
    document.body.style.backgroundImage = "url('img/cloud.jpg')";
  } else if (weatherType.textContent === "Rain") {
    document.body.style.backgroundImage = "url('img/rain.jpg')";
  } else if (weatherType.textContent === "Snow") {
    document.body.style.backgroundImage = "url('img/snow.jpg')";
  } else if (weatherType.textContent === "Thunderstorm") {
    document.body.style.backgroundImage = "url('img/thunderstorm.jpg')";
  } */
}

function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
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

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}

/* fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=ID_ВАШЕГО_ГОРОДА&lang=ru&appid=ВАШ_API_КЛЮЧ"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    //добавляем название города
    document.querySelector(".weather__city").textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector(".weather__forecast").innerHTML =
      Math.round(data.main.temp - 273) + "&deg;";
    //Добавляем описание погоды
    document.querySelector(".weather__desc").textContent =
      data.weather[0]["description"];
    //Добавляем иконку погоды
    document.querySelector(
      ".weather__icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  })
  .catch(function () {
    //Обрабатываем ошибки
  }); */
