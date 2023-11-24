/* WEATHER */

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastList = document.querySelector('#forecast-list'); // Create a <ul> element in your HTML with id "forecast-list"
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.60&lon=-58.37&appid=71af0db7deda29b809c083c77221039b&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);

            // Fetch and display 3-day forecast
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-34.60&lon=-58.37&appid=71af0db7deda29b809c083c77221039b&units=metric`;
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
    currentTemp.innerHTML = `${roundedTemp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent = desc;
}

function displayForecast(forecastData) {
  forecastList.innerHTML = ''; 
  const currentDate = new Date(); 

  const displayedDates = [];

for (const forecast of forecastData.list) {
    const forecastDate = new Date(forecast.dt * 1000);


    if (!displayedDates.includes(forecastDate.toDateString())) {
        const roundTemp = Math.round(forecast.main.temp);
        const temperature = roundTemp;

        const listItem = document.createElement('li');
        listItem.innerHTML = `${forecastDate.toDateString()}: ${temperature.toFixed(1)}°C`;
        forecastList.appendChild(listItem);

        displayedDates.push(forecastDate.toDateString()); 

        if (displayedDates.length === 3) {
            break;
        }
    }
  }
}



/* SPOTLIGHT */

const membersUrl = 'https://martinmorag.github.io/wdd230/chamber/data/members.json';

async function getMembers() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayMembers(data);
}
  
getMembers();

function getRandomMember(data, membershipType) {
    // Filter members based on the specified membership type (Silver or Gold)
    const eligibleMembers = data.members.filter(member => member.membershipLevel === membershipType);

    // Check if there are eligible members
    if (eligibleMembers.length > 0) {
        // Generate a random index within the range of eligible members
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
        return eligibleMembers[randomIndex];
    } else {
        return null; // No eligible members found
    }
}

function displayMembers(data) {
    let name = document.querySelectorAll('.member_name');
    let image = document.querySelectorAll('.member_image');
    let membership = document.querySelectorAll('.membership');

    const silverMember = getRandomMember(data, 'Silver');
    if (silverMember) {
        name[0].textContent = silverMember.name;
        image[0].setAttribute('src', silverMember.icon);
        image[0].setAttribute('alt', silverMember.name);
        membership[0].textContent = silverMember.membershipLevel;
    }

    const goldMember = getRandomMember(data, 'Gold');
    if (goldMember) {
        name[1].textContent = goldMember.name;
        image[1].setAttribute('src', goldMember.icon);
        image[1].setAttribute('alt', goldMember.name);
        membership[1].textContent = goldMember.membershipLevel;
    }
}



/* BANNER */

const currentDate = new Date();
const currentDay = currentDate.getDay(); 

if (currentDay >= 1 && currentDay <= 3) { 
    const banner = document.getElementById('banner');
    const closeBanner = document.getElementById('closeBanner');

    if (localStorage.getItem('bannerClosed') !== 'true') {
        banner.style.display = 'block';
    }

    closeBanner.addEventListener('click', () => {
        banner.style.display = 'none';
        localStorage.setItem('bannerClosed', 'true'); // Store the banner closed state
    });
}


// LAST MODIFIED

function formatDate(date) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
  return date.toLocaleDateString(undefined, options);
}

// Get the last modified date of the current document
const lastModified = new Date(document.lastModified);

// Format the last modified date
const formattedLastModified = formatDate(lastModified);

// Update the content of the "lastModified" element with the formatted date
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = formattedLastModified;


// HAMBURGER MENU

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('open');
hamButton.classList.toggle('open');
});


/* dark mode button */

const darkModeButton = document.querySelector('#dark')
const content = document.querySelector('main')
const title = document.querySelector('.title')

/* boxes selection */
const events = document.querySelector('.event');
const weather = document.querySelector('.weather');
const first_review = document.querySelector('.first_review');
const second_review = document.querySelector('.second_review');
const banner = document.querySelector('.banner h3');
const boxes = document.querySelectorAll('.member');

let isDarkMode = localStorage.getItem('darkMode') === 'true';

function setMode(isDark) {
  if (isDark) {
      content.style.backgroundColor = '#0B132B';
      title.style.color = 'white';
      weather.style.color = 'black';
      weather.style.backgroundColor = "#f4faf4";
      first_review.style.color = 'black';
      first_review.style.backgroundColor = "#f4faf4";
      second_review.style.color = 'black';
      second_review.style.backgroundColor = "#f4faf4";
      banner.style.color = 'white';
  } else {
      content.style.backgroundColor = 'white';
      title.style.color = '#0B132B';
      weather.style.color = '#f4faf4';
      weather.style.backgroundColor = "#0B132B";
      first_review.style.color = '#f4faf4';
      first_review.style.backgroundColor = "#0B132B";
      second_review.style.color = '#f4faf4';
      second_review.style.backgroundColor = "#0B132B";
      banner.style.color = '#0B132B';
      b
  }
}

setMode(isDarkMode);

darkModeButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  
  localStorage.setItem('darkMode', isDarkMode);

  setMode(isDarkMode);
});

