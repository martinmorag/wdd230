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
const events = document.querySelector('.event')
const weather = document.querySelector('.weather')
const first_review = document.querySelector('.first_review')
const second_review = document.querySelector('.second_review')
const events_link = document.querySelector('.event a')
const freview_link = document.querySelector('.first_review a')
const sreview_link = document.querySelector('.second_review a')

let isDarkMode = localStorage.getItem('darkMode') === 'true';

function setMode(isDark) {
    if (isDark) {
        content.style.backgroundColor = '#0B132B';
        title.style.color = 'white';
        events.style.color = 'black';
        events_link.style.color = 'black';
        events.style.backgroundColor = "#f4faf4";
        weather.style.color = 'black';
        weather.style.backgroundColor = "#f4faf4";
        first_review.style.color = 'black';
        first_review.style.backgroundColor = "#f4faf4";
        second_review.style.color = 'black';
        second_review.style.backgroundColor = "#f4faf4";
        freview_link.style.color = 'black';
        sreview_link.style.color = 'black';
    } else {
        content.style.backgroundColor = 'white';
        title.style.color = '#0B132B';
        events.style.color = '#f4faf4';
        events_link.style.color = 'white';
        events.style.backgroundColor = "#0B132B";
        weather.style.color = '#f4faf4';
        weather.style.backgroundColor = "#0B132B";
        first_review.style.color = '#f4faf4';
        first_review.style.backgroundColor = "#0B132B";
        second_review.style.color = '#f4faf4';
        second_review.style.backgroundColor = "#0B132B";
        freview_link.style.color = 'white';
        sreview_link.style.color = 'white';
    }
}

setMode(isDarkMode);

darkModeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    localStorage.setItem('darkMode', isDarkMode);

    setMode(isDarkMode);
});
