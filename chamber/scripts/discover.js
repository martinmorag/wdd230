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

/* boxes selection */
const visits = document.querySelector('.visits')
const bar_title = document.querySelector('#sidebar h3')
const event_title = document.querySelector('.event')
const event_content = document.querySelector('.about')
const expo = document.querySelector('.expo')
const purpose = document.querySelector('.purpose')
const purpose_title = document.querySelector('.what')
const purpose_do = document.querySelector('.do')
const purpose_stitle = document.querySelector('.objectives')
const li = document.querySelector('.purpose ul')
const images = document.querySelector('#images')


let isDarkMode = localStorage.getItem('darkMode') === 'true';

function setMode(isDark) {
    if (isDark) {
        content.style.backgroundColor = '#0B132B';
        visits.style.color = 'white';
        bar_title.style.color = 'white';
        event_title.style.color = 'white';
        event_content.style.color = 'white';
        expo.style.border = '2px solid white';
        purpose_title.style.color = 'white';
        purpose_stitle.style.color = 'white';
        purpose_do.style.color = 'white';
        li.style.color = 'white';
        purpose.style.border = '2px solid white';
        images.style.color = 'white';
    } else {
        content.style.backgroundColor = 'white';
        visits.style.color = '#0B132B';
        bar_title.style.color = '#0B132B';
        event_title.style.color = '#0B132B';
        event_content.style.color = '#0B132B';
        expo.style.border = '2px solid #0B132B';
        purpose_title.style.color = '#0B132B';
        purpose_stitle.style.color = '#0B132B';
        purpose_do.style.color = '#0B132B';
        li.style.color = '#0B132B';
        purpose.style.border = '2px solid #0B132B';
        images.style.color = '#0B132B';
    }
}

setMode(isDarkMode);

darkModeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    localStorage.setItem('darkMode', isDarkMode);

    setMode(isDarkMode);
});


/* number of visits */

// Check if 'lastVisit' key exists in localStorage
if (!localStorage.getItem('lastVisit')) {
    // If it's the first visit, store the current date as 'lastVisit'
    localStorage.setItem('lastVisit', new Date().toISOString());
    // Display a welcome message
    displayMessage("Welcome! Let us know if you have any questions.");
  } else {
    // Get the 'lastVisit' date from localStorage
    const lastVisitDate = new Date(localStorage.getItem('lastVisit'));
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - lastVisitDate;
  
    // Calculate the number of days elapsed
    const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    // Display an appropriate message based on the time elapsed
    if (daysElapsed === 0) {
      displayMessage("Back so soon! Awesome!");
    } else {
      const dayText = daysElapsed === 1 ? "day" : "days";
      displayMessage(`You last visited ${daysElapsed} ${dayText} ago.`);
    }
  
    // Update 'lastVisit' with the current date for the next visit
    localStorage.setItem('lastVisit', currentDate.toISOString());
  }
  
  // Function to display messages in the sidebar content area
  function displayMessage(message) {
    const sidebarContent = document.querySelector('.visits');
    sidebarContent.textContent = message;
  }
  