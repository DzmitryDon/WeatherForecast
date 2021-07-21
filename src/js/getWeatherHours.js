const btnHour = document.getElementById("button-hour");
btnHour.onclick = getWeatherHours;

const searchInputBox1 = document.getElementById("input-box");

function getWeatherHours() {
  getWeatherReport(searchInputBox1.value);
}

function getWeatherReport(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9300c4ab4a685ca79f262ab7b4d2339`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

function showWeatherReport(weather) {
  console.log(weather);
}
