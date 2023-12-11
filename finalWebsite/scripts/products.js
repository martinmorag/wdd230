/* GETTING DATA WITH FETCH */
const quantity = document.querySelectorAll('.quantity');
const price = document.querySelectorAll('.price');
const products = document.querySelectorAll('.thermo_img');
const productDisplay = document.querySelectorAll('.product');
const url = 'https://martinmorag.github.io/wdd230/finalWebsite/data/thermos.json';

async function thermosFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

thermosFetch();

/* VARIABLES OF IMG  */

let greenThermo1lt = '';
let greenThermo1ltALT = '';
let clayThermo1lt = '';
let clayThermo1ltALT = '';
let greenThermo590lt = '';
let greenThermo590ltALT = '';
let blackThermo590lt = '';
let blackThermo590ltALT = '';
let charcoalThermo590lt = '';
let charcoalThermo590ltALT = '';
let greenThermo940lt = '';
let greenThermo940ltALT = '';
let silverThermo940lt = '';
let silverThermo940ltALT = '';
let clayThermo940lt = '';
let clayThermo940ltALT = '';
let blackThermo940lt = '';
let blackThermo940ltALT = '';
let limestoneThermo940lt = '';
let limestoneThermo940ltALT = '';


function displayResults(data) {
 
  greenThermo1lt = data.thermos[0].photo;
  greenThermo1ltALT = data.thermos[0].name;
  clayThermo1lt = data.thermos[1].photo;
  clayThermo1ltALT = data.thermos[1].name;
  greenThermo590lt = data.thermos[2].photo;
  greenThermo590ltALT = data.thermos[2].name;
  blackThermo590lt = data.thermos[3].photo;
  blackThermo590ltALT = data.thermos[3].name;
  charcoalThermo590lt = data.thermos[4].photo;
  charcoalThermo590ltALT = data.thermos[4].name;
  greenThermo940lt = data.thermos[5].photo;
  greenThermo940ltALT = data.thermos[5].name;
  silverThermo940lt = data.thermos[6].photo;
  silverThermo940ltALT = data.thermos[6].name;
  clayThermo940lt = data.thermos[7].photo;
  clayThermo940ltALT = data.thermos[7].name;
  blackThermo940lt = data.thermos[8].photo;
  blackThermo940ltALT = data.thermos[8].name;
  limestoneThermo940lt = data.thermos[9].photo;
  limestoneThermo940ltALT = data.thermos[9].name;
  
  
  products[0].src = greenThermo1lt || 'path/to/default_first_image.png';
  products[0].alt = greenThermo1ltALT || 'Default First Alt Text';
  products[1].src = greenThermo590lt || 'path/to/default_second_image.png';
  products[1].alt = greenThermo590ltALT || 'Default Second Alt Text';
  products[2].src = greenThermo940lt || 'path/to/default_third_image.png';
  products[2].alt = greenThermo940ltALT || 'Default Third Alt Text';
  
  
  price[0].innerHTML = '$' + data.thermos[0].price;
  price[1].innerHTML = '$' + data.thermos[2].price;
  price[2].innerHTML = '$' + data.thermos[5].price;
  
  quantity[0].innerHTML = data.thermos[0].storingCapacity + ' lt';
  quantity[1].innerHTML = data.thermos[2].storingCapacity + ' lt';
  quantity[2].innerHTML = data.thermos[5].storingCapacity + ' lt';
}



/* CHANGING COLORS BUTTONS */

const clayCol = document.querySelectorAll('.clay');
const greenCol = document.querySelectorAll('.green');
const blackCol = document.querySelectorAll('.black');
const limestoneCol = document.querySelector('.limestone');
const charcoalCol = document.querySelector('.charcoal');
const silverCol = document.querySelector('.silver');


const showColor = document.querySelectorAll('.color_choice');

/* CLAY */
clayCol[0].addEventListener('click', function() {
  showColor[0].innerHTML = 'Clay'; 
    if (whichLanguage) {
  showColor[0].innerHTML = 'Arcilla';
    }  else {
  showColor[0].innerHTML = 'Clay';     
    }
  products[0].src = clayThermo1lt;
  products[0].alt = clayThermo1ltALT;
  
  productDisplay[0].style.backgroundImage = 'linear-gradient(#8F452F, #31493C)';
});
clayCol[1].addEventListener('click', function() {
  showColor[2].innerHTML = 'Clay'; 
    if (whichLanguage) {
  showColor[2].innerHTML = 'Arcilla';
    }  else {
  showColor[2].innerHTML = 'Clay';     
    }
  products[2].src = clayThermo940lt;
  products[2].alt = clayThermo940ltALT;
  
  productDisplay[2].style.backgroundImage = 'linear-gradient(#8F452F, #31493C)';
});
/* GREEN */
greenCol[0].addEventListener('click', function() {
  showColor[0].innerHTML = 'Green'; 
    if (whichLanguage) {
  showColor[0].innerHTML = 'Verde';
    }  else {
  showColor[0].innerHTML = 'Green';     
    }
  products[0].src = greenThermo1lt;
  products[0].alt = greenThermo1ltALT;
  
  productDisplay[0].style.backgroundImage = 'linear-gradient(#617466, #31493C)';
});
greenCol[1].addEventListener('click', function() {
  showColor[1].innerHTML = 'Green'; 
    if (whichLanguage) {
  showColor[1].innerHTML = 'Verde';
    }  else {
  showColor[1].innerHTML = 'Green';     
    }
  products[1].src = greenThermo590lt;
  products[1].alt = greenThermo590ltALT;
  
  productDisplay[1].style.backgroundImage = 'linear-gradient(#617466, #31493C)';
});
greenCol[2].addEventListener('click', function() {
  showColor[2].innerHTML = 'Green'; 
    if (whichLanguage) {
  showColor[2].innerHTML = 'Verde';
    }  else {
  showColor[2].innerHTML = 'Green';     
    }
  products[2].src = greenThermo940lt;
  products[2].alt = greenThermo940ltALT;
  
  productDisplay[2].style.backgroundImage = 'linear-gradient(#617466, #31493C)';
});
/* BLACK */
blackCol[0].addEventListener('click', function() {
  showColor[1].innerHTML = 'Black'; 
    if (whichLanguage) {
  showColor[1].innerHTML = 'Negro';
    }  else {
  showColor[1].innerHTML = 'Black';     
    }
  products[1].src = blackThermo590lt;
  products[1].alt = blackThermo590ltALT;
  
  productDisplay[1].style.backgroundImage = 'linear-gradient(black, #31493C)';
});
blackCol[1].addEventListener('click', function() {
  showColor[2].innerHTML = 'Black'; 
    if (whichLanguage) {
  showColor[2].innerHTML = 'Negro';
    }  else {
  showColor[2].innerHTML = 'Black';     
    }
  products[2].src = blackThermo940lt;
  products[2].alt = blackThermo940ltALT;
  
  productDisplay[2].style.backgroundImage = 'linear-gradient(black, #31493C)';
});
/* SILVER */
silverCol.addEventListener('click', function() {
  showColor[2].innerHTML = 'Silver'; 
    if (whichLanguage) {
  showColor[2].innerHTML = 'Plateado';
    }  else {
  showColor[2].innerHTML = 'Silver';     
    }
  products[2].src = silverThermo940lt;
  products[2].alt = silverThermo940ltALT;
  
  productDisplay[2].style.backgroundImage = 'linear-gradient(#929C9D, #31493C)';
});
/* CHARCOAL */
charcoalCol.addEventListener('click', function() {
  showColor[1].innerHTML = 'Charcoal'; 
    if (whichLanguage) {
  showColor[1].innerHTML = 'Carbón';
    }  else {
  showColor[1].innerHTML = 'Charcoal';     
    }
  products[1].src = charcoalThermo590lt;
  products[1].alt = charcoalThermo590ltALT;
  
  productDisplay[1].style.backgroundImage = 'linear-gradient(#545356, #31493C)';
});
/* LIMESTONE */
limestoneCol.addEventListener('click', function() {
  showColor[2].innerHTML = 'Limestone'; 
    if (whichLanguage) {
  showColor[2].innerHTML = 'Caliza';
    }  else {
  showColor[2].innerHTML = 'Limestone';     
    }
  products[2].src = limestoneThermo940lt;
  products[2].alt = limestoneThermo940ltALT;
  
  productDisplay[2].style.backgroundImage = 'linear-gradient(#E9CDC1, #31493C)';
});






function colName() {
  /* GREEN */
  
  showColor.forEach(element => {
  if (element.innerHTML === 'Green'){
    element.innerHTML = 'Verde';
  } else if (element.innerHTML === 'Verde'){
    element.innerHTML = 'Green';
    }
  });
  
  /* CLAY */
  
  showColor.forEach(element => {
  if (element.innerHTML === 'Clay'){
    element.innerHTML = 'Arcilla';
  } else if (element.innerHTML === 'Arcilla'){
    element.innerHTML = 'Clay';
    }
  });
  
  /* Black */
  
  showColor.forEach(element => {
  if (element.innerHTML === 'Black'){
    element.innerHTML = 'Negro';
  } else if (element.innerHTML === 'Negro'){
    element.innerHTML = 'Black';
    }
  });
  
  /* SILVER */
  
  showColor.forEach(element => {
  if (element.innerHTML === 'Silver'){
    element.innerHTML = 'Plateado';
  } else if (element.innerHTML === 'Plateado'){
    element.innerHTML = 'Silver';
    }
  });
  
  /* LIMESTONE */
  
  showColor.forEach(element => {
  if (element.innerHTML === 'Limestone'){
    element.innerHTML = 'Caliza';
  } else if (element.innerHTML === 'Caliza'){
    element.innerHTML = 'Limestone';
    }
  });
  
  /* CHARCOAL */
  
  showColor.forEach(element => {
  if (element.innerHTML === 'Charcoal'){
    element.innerHTML = 'Carbón';
  } else if (element.innerHTML === 'Carbón'){
    element.innerHTML = 'Charcoal';
    }
  });
  
  
}


/* CHANGE LANGUAGE BUTTON */
const langBtn = document.querySelector('.lang_btn');
/* tags that change language */
const title = document.querySelector('.title');
const priceDisplay = document.querySelectorAll('.pdisplay');
const storing = document.querySelectorAll('.qdisplay');
const home = document.querySelector('.home');
const prod = document.querySelector('.products');
const contact = document.querySelector('.contact');
const web_title = document.querySelector('title');
const footer = document.querySelector('footer p');

let whichLanguage = false;


function changeLang(whichLang) {
  if (whichLang) {
    title.innerHTML = 'Nuestros Productos';
    for (let i = 0; i < priceDisplay.length; i++) {
      priceDisplay[i].innerHTML = 'Precio: ';
    }
    for (let i = 0; i < storing.length; i++) {
      storing[i].innerHTML = 'Capacidad: ';
    }
    home.innerHTML = 'Inicio';
    prod.innerHTML = 'Nuestro Productos';
    contact.innerHTML = 'Contacto';
    web_title.innerHTML = 'Nuestros Productos';
    footer.innerHTML = 'Termos Stanley en Virasoro';
  }
  else {
    title.innerHTML = 'Our Products';
    for (let i = 0; i < priceDisplay.length; i++) {
      priceDisplay[i].innerHTML = 'Price: ';
    }
    for (let i = 0; i < storing.length; i++) {
      storing[i].innerHTML = 'Storing Capacity: ';
    }
    home.innerHTML = 'Home';
    prod.innerHTML = 'Our Products';
    contact.innerHTML = 'Contact';
    web_title.innerHTML = 'Our Products';
    footer.innerHTML = 'Stanley Thermos in Virasoro';
  }
}

langBtn.addEventListener('click', function() {
  whichLanguage = !whichLanguage;
  
  changeLang(whichLanguage);
  colName();
});


/* HAMBURGUER BUTTON */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('open');
hamButton.classList.toggle('open');
});