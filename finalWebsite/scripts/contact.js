/* CHANGE LANGUAGE BUTTON */
const langBtn = document.querySelector('.lang_btn');
/* tags that change language */
const title = document.querySelector('.form_title');
const label = document.querySelectorAll('.top');
const submitBtn = document.querySelector('.submitBtn');
const wpp = document.querySelector('.wpp_button i');
const web_title = document.querySelector('title');
const home = document.querySelector('.home');
const products = document.querySelector('.products');
const contact = document.querySelector('.contact');

let whichLanguage = false;


function changeLang(whichLang) {
  if (whichLang) {
    title.innerHTML = '¿Tenes alguna pregunta?';
    label[0].innerHTML= 'Nombre*';
    label[2].innerHTML = 'Numero de teléfono*';
    label[3].innerHTML = '¿Sobre que es el asunto?';
    label[4].innerHTML = 'Hace tu pregunta';
    submitBtn.value = 'Mandar mi pregunta';
    wpp.innerHTML = 'Contactanos por WhatsApp';
    wpp.onclick = 'document.location="https://walink.co/6ff2d4"';
    web_title.innerHTML = 'Contactanos';
    home.innerHTML = 'Inicio';
    products.innerHTML = 'Nuestros Productos';
    contact.innerHTML = 'Contacto';
  }
  else {
    title.innerHTML = 'Do you have a question?';
    label[0].innerHTML = 'Name*';
    label[2].innerHTML = 'Phone Number*';
    label[3].innerHTML = 'What is this regarding?';
    label[4].innerHTML = 'Ask your question';
    submitBtn.value = 'Send my question';
    wpp.innerHTML = 'Contact us through WhatsApp';
    wpp.onclick = 'document.location="https://wa.link/q2ib6v"';
    web_title.innerHTML = 'Contact us';
    home.innerHTML = 'Home';
    products.innerHTML = 'Our Products';
    contact.innerHTML = 'Contact';
  }
}

langBtn.addEventListener('click', function() {
  whichLanguage = !whichLanguage;
  
  changeLang(whichLanguage);
});




/* TOGGLE MENU */

let theToggle = document.getElementById('toggle');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}
