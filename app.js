/**
 *      API KEY = a28f7d4fff30725ae2415189320ed654
 *
 *      https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
 *
 */

const API_KEY = `a28f7d4fff30725ae2415189320ed654`;
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showData(data);
};

const showData = (data) => {
  console.log(data);
  if (data.cod == "404") {
    weather.innerHTML = `<h4> City not found </h4>`;
    return;
  }
  weather.innerHTML = `
      <div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/></div>
      <div>
          <h2>${data.main.temp} °C</h2>
          <h4>${data.weather[0].main}</h4>
          <h4>Country : ${data.sys.country}</h4>
          
      </div>
      `;
};

form.addEventListener("submit", function (event) {
  weather.innerHTML = `<h4>Loading </h4>`;
  getWeather(search.value);
  event.preventDefault();
});
