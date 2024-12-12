async function getCurrentWeatherByCity(city) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=e308fe779de744ac8b7183559241212&q=${city}&aqi=no`)
    const currentWeather = await data.json()

    return currentWeather
}



const locationButton = document.querySelector(".location-button")
const locationInput = document.querySelector(".location-input")

locationButton.addEventListener("click", async () => {
    const locationInputValue = locationInput.value
    const currentWeather = await getCurrentWeatherByCity(locationInputValue)
    const forecast = await getForecastByCity(locationInputValue)
    

    const currentWeatherIcon = currentWeather.current.condition.icon
    const currentWeatherTemperature = currentWeather.current.temp_c
    const currentWeatherStatus = currentWeather.current.condition.text

    resetWeatherApp()

    renderCurrentWeather(currentWeatherIcon, currentWeatherTemperature, currentWeatherStatus)
    console.log(forecast)
    renderForecast(forecast.forecast.forecastday[0].hour)
})

function renderCurrentWeather(iconSrc, temperature, status) {
    const currentWeatherIconEl = document.createElement("img")
    currentWeatherIconEl.setAttribute("class", "current-weather-icon")
    currentWeatherIconEl.setAttribute("src", iconSrc)

    const currentWeatherTemperatureEl = document.createElement("p")
    currentWeatherTemperatureEl.setAttribute("class", "current-weather-temperature")
    currentWeatherTemperatureEl.textContent = temperature

    const currentWeatherStatusEl = document.createElement("p")
    currentWeatherStatusEl.setAttribute("class", "current-weather-status")
    currentWeatherStatusEl.textContent = status

    const currentWeather = document.querySelector(".current-weather")
    currentWeather.appendChild(currentWeatherIconEl)
    currentWeather.appendChild(currentWeatherTemperatureEl)
    currentWeather.appendChild(currentWeatherStatusEl)
}

async function getForecastByCity(city) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e308fe779de744ac8b7183559241212&q=${city}&days=1&aqi=no&alerts=no`)
    const forecast = await data.json()

    return forecast
}

function createForecastElement(iconSrc, time, temperature) {
    const forecastEl = document.createElement("div")
    forecastEl.setAttribute("class", "forecast-element")

    const forecastTimeEl = document.createElement("p")
    forecastTimeEl.setAttribute("class", "forecast-time")
    forecastTimeEl.textContent = time.slice(11)

    const forecastIconEl = document.createElement("img")
    forecastIconEl.setAttribute("class", "forecast-icon")
    forecastIconEl.setAttribute("src", iconSrc)

    const forecastTemperatureEl = document.createElement("p")
    forecastTemperatureEl.setAttribute("class", "forecast-temperature")
    forecastTemperatureEl.textContent = temperature

    forecastEl.appendChild(forecastTimeEl)
    forecastEl.appendChild(forecastIconEl)
    forecastEl.appendChild(forecastTemperatureEl)
    
    return forecastEl
}

function renderForecast(forecast) {
    const forecastContainer = document.querySelector(".forecast")
    
    forecast.forEach (forecastItem => {
        const forecastElement = createForecastElement(forecastItem.condition.icon, forecastItem.time, forecastItem.temp_c)
        forecastContainer.appendChild(forecastElement)
    })
}

function resetWeatherApp() {
    const currentWeather = document.querySelector(".current-weather")
    const forecast = document.querySelector(".forecast")

    currentWeather.innerHTML = ""
    forecast.innerHTML = ""
}