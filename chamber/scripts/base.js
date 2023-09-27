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