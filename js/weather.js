const API_KEY = "0db106f17f347fd5d0c8aa5eb69deb43";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const city = document.querySelector(".weather span:first-child");
      const weather = document.querySelector(".weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
