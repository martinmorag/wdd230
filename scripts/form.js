function updateRating(value) {
      document.getElementById('value').innerHTML = value;
}


/* FORM re-enter password js */
document.querySelector('form').addEventListener('submit', function (event) {
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('password2').value;
      var passwordError = document.getElementById('passwordError');

      // Check if passwords match
      if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match.';
        event.preventDefault(); // Prevent form submission
      } else {
        passwordError.textContent = '';
      }
});

document.getElementById('password').addEventListener('input', function () {
      var validity = this.validity;

      // Check if the input is valid
      if (validity.patternMismatch) {
        this.setCustomValidity('Password must contain at least 8 characters, including at least one letter and one number');
      } else {
        this.setCustomValidity('');
      }
});


/* Hamburger 

const menuToggle = document.getElementById('menu-toggle');
const navUL = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navUL.classList.toggle('active');
});  */


const menuToggle = document.getElementById('menu-toggle');
const navUL = document.querySelector('.navigation ul');

menuToggle.addEventListener('click', () => {
  navUL.classList.toggle('active');
});

