function updateTime(cityTimeZone) {
  let dateElement = document.querySelector(".date");
  let timeElement = document.querySelector(".time");

  if (!cityTimeZone) {
    // If cityTimeZone is an empty string, use the guessed timezone
    cityTimeZone = moment.tz.guess();
  }

  let currentTime = moment().tz(cityTimeZone);

  dateElement.innerHTML = currentTime.format("MMMM Do, YYYY");
  timeElement.innerHTML = currentTime.format("h:mm:ss [<small>] A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) {
    return;
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city-block");
  citiesElement.innerHTML = `<div class="city">
          <span class="city-name">${cityName}</span>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>] A[</small>]"
        )}</div>`;
  updateTime(cityTimeZone);
}

updateCity({ target: { value: moment.tz.guess() } });

let selectElement = document.querySelector("#choose-city");
selectElement.addEventListener("change", updateCity);

setInterval(function () {
  let selectedCity = document.querySelector("#choose-city").value;
  updateTime(selectedCity);
}, 1000);
