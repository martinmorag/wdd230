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

let isDarkMode = localStorage.getItem('darkMode') === 'true';

function setMode(isDark) {
    if (isDark) {
        content.style.backgroundColor = '#0B132B';
        content.style.color = 'white';
    } else {
        content.style.backgroundColor = 'white';
        content.style.color = '#0B132B';
    }
}

setMode(isDarkMode);

darkModeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    localStorage.setItem('darkMode', isDarkMode);

    setMode(isDarkMode);
});
