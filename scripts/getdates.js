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



const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = currentYear;

/* Hamburger */

const menuToggle = document.getElementById('menu-toggle');
const navUL = document.querySelector('.navigation ul');

menuToggle.addEventListener('click', () => {
  navUL.classList.toggle('active');
});


/* the number of visits */

// Check if the 'pageVisits' key exists in localStorage
if (localStorage.getItem('pageVisits') === null) {
  // If not, initialize it with a value of 1
  localStorage.setItem('pageVisits', '1');
} else {
  // If it exists, increment the value by 1
  let currentVisits = parseInt(localStorage.getItem('pageVisits'));
  currentVisits++;
  localStorage.setItem('pageVisits', currentVisits.toString());
}

// Get the updated total number of visits from localStorage
const totalVisits = localStorage.getItem('pageVisits');

// Display the total number of visits on your webpage
const visitsElement = document.getElementById('visits'); // Assuming you have an HTML element with id 'visits' to display the count
visitsElement.textContent = `${totalVisits} times.`;




/* WEATHER */

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-28.05&lon=-56.01&appid=632ffff2d8b50ca68b2810a13cf768e0&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent = desc;
}



/* LINKS */

const baseUrl = 'https://martinmorag.github.io/wdd230/';
const linksUrl = 'https://martinmorag.github.io/wdd230/data/links.json'

async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displayLinks(data);
}
  
getLinks();

function displayLinks(data) {
   let weeks = document.querySelectorAll('.week');
   weeks[0].setAttribute('href', data.weeks[0].links[0].url);
   weeks[0].textContent = ` ${data.weeks[0].links[0].title} `;
   weeks[1].setAttribute('href', data.weeks[0].links[1].url);
   weeks[1].textContent = ` ${data.weeks[0].links[1].title} `;
   weeks[2].setAttribute('href', data.weeks[1].links[0].url);
   weeks[2].textContent = ` ${data.weeks[1].links[0].title} `;
   weeks[3].setAttribute('href', data.weeks[1].links[1].url);
   weeks[3].textContent = ` ${data.weeks[1].links[1].title} `;
   weeks[4].setAttribute('href', data.weeks[1].links[2].url);
   weeks[4].textContent = ` ${data.weeks[1].links[2].title} `;
   weeks[5].setAttribute('href', data.weeks[2].links[0].url);
   weeks[5].textContent = ` ${data.weeks[2].links[0].title} `;
   weeks[6].setAttribute('href', data.weeks[3].links[0].url);
   weeks[6].textContent = ` ${data.weeks[3].links[0].title} `;
}


/* Hamburger */

const menuToggle = document.getElementById('menu-toggle');
const navUL = document.querySelector('.navigation ul');

menuToggle.addEventListener('click', () => {
  navUL.classList.toggle('active');
});
