function updateRating(value) {
      document.getElementById('value').innerHTML = value;
}


/* FORM re-enter password js */
const ps1 = document.querySelector("#password");
const ps2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

ps2.addEventListener("focusout", checkSame);

function checkSame() {
	if (ps1.value !== ps2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		ps2.style.backgroundColor = "#fff0f3";
		ps2.value = "";
		ps2.focus();
	} else {
		message.style.display = "none";
		ps2.style.backgroundColor = "#fff";
		ps2.style.color = "#000";
	}
}


/* Hamburger 

const menuToggle = document.getElementById('menu-toggle');
const navUL = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navUL.classList.toggle('active');
});  */

document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var mainNav = document.querySelector('.navigation');

    // Add click event listener to the toggle button
    menuToggle.addEventListener('click', function () {
        // Toggle the 'active' class on the main navigation
        mainNav.classList.toggle('active');
    });
});


