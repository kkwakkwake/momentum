const MY_API_KEY = '5249c8a8592e20dce5ab85aa6371ce8e';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}&units=metric`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}

function onGeoErr() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);