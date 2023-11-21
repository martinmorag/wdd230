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
const darkModeButton = document.querySelector('#dark');
const content = document.querySelector('main');
const title = document.querySelector('h1');
const boxes = document.querySelectorAll('.members_grid section');
const as = document.querySelectorAll('.website');

/* boxes selection */

let isDarkMode = localStorage.getItem('darkMode') === 'true';

function setMode(isDark) {
    if (isDark) {
        content.style.backgroundColor = '#0B132B';
        title.style.color = 'white';
        boxes.forEach((box) => {
          box.style.backgroundColor = '#4a5272';
          box.style.color = 'white';
        });
        as.forEach((ases) => {
          ases.style.color = 'white';
        });
    } else {
        content.style.backgroundColor = 'white';
        title.style.color = '#0B132B';
        boxes.forEach((box) => {
          box.style.backgroundColor = '#4a5272';
          box.style.color = 'white';
        });
        as.forEach((ases) => {
          ases.style.color = 'white';
        });
    }
}

setMode(isDarkMode);

darkModeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    localStorage.setItem('darkMode', isDarkMode);

    setMode(isDarkMode);
});





/* DISPLAY OF BUSINESS DIRECTORY FROM JSON (GRID VERSION) */
const url = "https://martinmorag.github.io/wdd230/chamber/data/members.json";
const directory = document.querySelector('.members_grid');

async function getMembersDataGrid() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembersGrid(data.members);
}
getMembersDataGrid();

const displayMembersGrid = (members) => {
  const sections = directory.querySelectorAll('section'); // Select all the sections

  members.forEach((member, index) => {
    const section = sections[index]; // Select the corresponding section

    const name = section.querySelector('.name');
    const membership = section.querySelector('.membership');
    const image = section.querySelector('.image');
    const address = section.querySelector('.address');
    const phone = section.querySelector('.phone');
    const website = section.querySelector('.website');

    name.textContent = `${member.name}`;
    membership.textContent = `${member.membershipLevel}`;

    image.src = member.icon || 'path/to/placeholder-image.jpg';
    image.alt = member.name || 'path/to/alt';
    /*image.setAttribute('src', member.icon);
    image.setAttribute('alt', member.name);*/
    image.setAttribute('width', '150');
    image.setAttribute('height', 'auto');
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phoneNumber}`;
    website.textContent = `${member.website}`;
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');
  });
};


/* DISPLAY OF BUSINESS DIRECTORY FROM JSON (LIST VERSION) 
const second_directory = document.querySelector('.members_list');

async function getMembersDataList() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembersList(data.members);
}
getMembersDataList();

const displayMembersList = (members) => {
  members.forEach((member) => {
    let whole = document.createElement('section');
    let name = document.createElement('p');
    let membership = document.createElement('p');
    let website = document.createElement('a');

    name.textContent = `${member.name}`
    membership.textContent = `${member.membershipLevel}`
    website.textContent = `${member.website}`;
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');

    whole.appendChild(name);
    whole.appendChild(membership);
    whole.appendChild(website);

    second_directory.appendChild(whole);
  });
}; 


/* CHANGES FROM GRID TO LIST AND VICEVERSA */

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".members_grid");

/* grid version elements */
let names = document.querySelectorAll('.name');
let memberships = document.querySelectorAll('.membership');
/* list version elements */
let images = document.querySelectorAll('.image');
let addresses = document.querySelectorAll('.address');
let phones = document.querySelectorAll('.phone');

gridbutton.addEventListener("click", () => {
    display.classList.add("members_grid");
    display.classList.remove("members_list");

    /* grid version */
    names.forEach((name) => {
        name.classList.add("dissapear");
    });
    memberships.forEach((membership) => {
        membership.classList.add("dissapear");
    });
    /* list version */
    images.forEach((image) => {
        image.classList.remove("dissapear");
    });
    addresses.forEach((address) => {
        address.classList.remove("dissapear");
    });
    phones.forEach((phone) => {
      phone.classList.remove("dissapear");
    });
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("members_list");
    display.classList.remove("members_grid");

    /* grid version */
    names.forEach((name) => {
        name.classList.remove("dissapear");
    });
    memberships.forEach((membership) => {
        membership.classList.remove("dissapear");
    });
    /* list version */
    images.forEach((image) => {
        image.classList.add("dissapear");
    });
    addresses.forEach((address) => {
        address.classList.add("dissapear");
    });
    phones.forEach((phone) => {
      phone.classList.add("dissapear");
    });
}
