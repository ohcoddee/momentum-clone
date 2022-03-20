const API_KEY = "f2d8b5989c6901a462b7bba0da1b0259";

function onGeoSuccessed(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} 도`;
    });
}
function onGeoFailed() {
  alert("Can't find your location.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccessed, onGeoFailed);
