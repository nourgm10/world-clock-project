function updateTime() {
  let cityElement = document.querySelector(".city-name");
  let dateElement = document.querySelector(".date");
  let timeElement = document.querySelector(".time");
  let currentTime = moment().tz("Europe/Paris");

  cityElement.innerHTML = `Paris`;
  dateElement.innerHTML = currentTime.format("MMMM Do, YYYY");
  timeElement.innerHTML = currentTime.format("h:mm:ss [<small>] A[</small>]");
}

// let selectElement = document.querySelector("#choose-city");
// selectElement.addEventListener("select", handleSearchSubmit);

updateTime();
setInterval(updateTime, 1000);
