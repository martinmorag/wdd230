/* PRICING */
const offers = document.querySelectorAll('.offer');
const url = "https://martinmorag.github.io/wdd230/cozumel/data/pricing.json";

async function apiFetchOffers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayOffers(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchOffers();

function displayOffers(data) {
    let fType = data.rental[0].scooters[2].type;
    let fCc = data.rental[0].scooters[2].cc;
    let fFullDay = data.rental[0].scooters[2].reservation[0].fullDay;
    offers[0].innerHTML = `for a Full Day and for the price of only $${fFullDay} you can get the ${fCc}CC ${fType}!`;

    let sType = data.rental[1].ATVs[0].type;
    let sHalfDay = data.rental[1].ATVs[0].reservation[0].halfDayPrice;
    offers[1].innerHTML = `If you make a reservation for half day use of the ATV, you can get the ${sType} for only $${sHalfDay}!`;

    let tType = data.rental[2].Jeeps[0].type;
    let tCapacity = data.rental[2].Jeeps[0].maxPersons;
    let tFullDay = data.rental[2].Jeeps[0].walkIn[0].fullDay;
    offers[2].innerHTML = `And if you are in a hurry with a lot of people, you can rent a Jeep, that can take up to ${tCapacity} people, this is the ${tType} and you can get it for $${tFullDay} and enjoy it all day long!`;
};


/* WEATHER */

const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.caption');
const forecast = document.querySelector('#forecast');
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=71af0db7deda29b809c083c77221039b&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);

            // Fetch and display 3-day forecast
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&appid=71af0db7deda29b809c083c77221039b&units=metric`;
            const forecastResponse = await fetch(forecastUrl);
            if (forecastResponse.ok) {
                const forecastData = await forecastResponse.json();
                displayForecast(forecastData);
            } else {
                throw Error(await forecastResponse.text());
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const roundedTemp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    currentTemp.innerHTML = `${roundedTemp}&deg;C`;
    currentHumidity.innerHTML = `Humidity: ${humidity}%`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.src = iconsrc || 'path/to/placeholder-image.jpg';
    weatherIcon.alt = 'Weather Icon' || 'Default Alt Text';
    captionDesc.textContent = desc;
}

function displayForecast(forecastData) {
    const nextDayForecastTemp = Math.round(forecastData.list[0].main.temp);
    const nextDayForecastMain = forecastData.list[0].weather[0].main;
    const nextDayForecastDesc = forecastData.list[0].weather[0].description;
    const nextDayForecastIcon = forecastData.list[0].weather[0].icon;

    forecast.innerHTML = `The next's day temperature at 15:00 will be ${nextDayForecastTemp}&deg;C`;
}

/* HAMBURGUER BUTTON */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('open');
hamButton.classList.toggle('open');
});
