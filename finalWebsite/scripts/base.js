/* IMAGES */

const thermoImg = document.querySelectorAll(".thermo");
const url = "https://martinmorag.github.io/wdd230/finalWebsite/data/thermos.json";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data) {

  thermoImg[0].src = data.thermos[0].photo || 'path/to/first_image.png';
  thermoImg[0].alt = data.thermos[0].name || 'Default Alt First Text';

  thermoImg[1].src = data.thermos[3].photo || 'path/to/second_image.png';
  thermoImg[1].alt = data.thermos[3].name || 'Default Alt Second Text';


  clayThermoImg = data.thermos[7].photo;
  clayThermoAlt = data.thermos[7].name;
  greenThermoImg = data.thermos[0].photo;
  greenThermoAlt = data.thermos[0].name;
  limestoneThermoImg = data.thermos[9].photo;
  limestoneThermoAlt = data.thermos[9].name;
  matteBlackThermoImg = data.thermos[3].photo;
  matteBlackThermoAlt = data.thermos[3].name;
}

/* Variables to be stored in the ANIMATED THERMOS function */

let clayThermoImg = "";
let clayThermoAlt = "";

let greenThermoImg = ""
let greenThermoAlt = "";

let limestoneThermoImg = "";
let limestoneThermoAlt = "";

let matteBlackThermoImg = "";
let matteBlackThermoAlt = "";




/* TYPING EFFECT */

const hidden = document.querySelector('.hidden');

addEventListener('click', function() {
    hidden.innerHTML = 'long lasting, trustworthy and high level product. And we got it here.';
})


/* ANIMATED THERMOS */

let clicks = 0;

let samples = document.querySelectorAll(".sample");
let thermos = document.querySelectorAll(".thermo");

samples[1].addEventListener("click", () => {
  
  clicks += 1;
  if (clicks === 4) {
    clicks = 0;
  }
  if (clicks === 0) {
    samples[0].style.backgroundColor = "#31493C";
    samples[0].style.top = "80px";
    samples[0].style.left = "-20px";
    $(samples[0]).animate({top: "50px", left: "10px"}, "slow");
    thermos[0].src = greenThermoImg;
    thermos[0].alt = greenThermoAlt;
    samples[1].style.backgroundColor = "#629379";
    samples[1].style.top = "30px";
    samples[1].style.left = "120px";
    $(samples[1]).animate({top: "0", left: "190px"}, "slow");
    thermos[1].src = matteBlackThermoImg;
    thermos[1].alt = matteBlackThermoAlt;
  }
  if (clicks === 1) {
    samples[0].style.backgroundColor = "#31493C";
    samples[0].style.top = "80px";
    samples[0].style.left = "-20px";
    $(samples[0]).animate({top: "50px", left: "10px"}, "slow");
    thermos[0].src = clayThermoImg;
    thermos[0].alt = clayThermoAlt;
    samples[1].style.backgroundColor = "#629379";
    samples[1].style.top = "30px";
    samples[1].style.left = "120px";
    $(samples[1]).animate({top: "0", left: "190px"}, "slow");
    thermos[1].src = greenThermoImg;
    thermos[1].alt = greenThermoAlt;
  }
  if (clicks === 2) {
    samples[0].style.backgroundColor = "#31493C";
    samples[0].style.top = "80px";
    samples[0].style.left = "-20px";
    $(samples[0]).animate({top: "50px", left: "10px"}, "slow");
    thermos[0].src = limestoneThermoImg;
    thermos[0].alt = limestoneThermoAlt;
    samples[1].style.backgroundColor = "#629379";
    samples[1].style.top = "30px";
    samples[1].style.left = "120px";
    $(samples[1]).animate({top: "0", left: "190px"}, "slow");
    thermos[1].src = clayThermoImg;
    thermos[1].alt = clayThermoAlt;
  }
  if (clicks === 3) {
    samples[0].style.backgroundColor = "#31493C";
    samples[0].style.top = "80px";
    samples[0].style.left = "-20px";
    $(samples[0]).animate({top: "50px", left: "10px"}, "slow");
    thermos[0].src = matteBlackThermoImg;
    thermos[0].alt = matteBlackThermoAlt;
    samples[1].style.backgroundColor = "#629379";
    samples[1].style.top = "30px";
    samples[1].style.left = "120px";
    $(samples[1]).animate({top: "0", left: "190px"}, "slow");
    thermos[1].src = limestoneThermoImg;
    thermos[1].alt = limestoneThermoAlt;
  }
});


