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
