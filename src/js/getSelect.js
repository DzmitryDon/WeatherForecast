export function getCountrySity() {
  fetch("./datas/sities.json")
    .then((res) => res.json())
    .then((json) => {
      let jsObj = json;
      for (let key in jsObj) {
        let countryOption = document.createElement("option");
        let countrySelect = document.getElementById("countrySelect");

        countryOption.innerText = key;
        countryOption.value = key;
        countryOption.name = key;

        countrySelect.appendChild(countryOption);
      }
      document
        .querySelector("#countrySelect")
        .addEventListener("change", function () {
          let cities = jsObj[this.value];

          citySelect.length = 0;

          for (const iterator of cities) {
            let cityOption = document.createElement("option");
            let citySelect = document.getElementById("citySelect");

            cityOption.innerText = iterator;
            citySelect.appendChild(cityOption);
          }
        });
    });
}

//////////////// main ///////

getCountrySity();
