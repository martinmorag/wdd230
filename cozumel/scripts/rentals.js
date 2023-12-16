/* PRICING */
const type = document.querySelectorAll('.type');
const persons = document.querySelectorAll('.persons');
const fHalfDay = document.querySelectorAll('.f_half_day');
const fFullDay = document.querySelectorAll('.f_full_day');
const sHalfDay = document.querySelectorAll('.s_half_day');
const sFullDay = document.querySelectorAll('.s_full_day');
const url = "https://martinmorag.github.io/wdd230/cozumel/data/pricing.json";

async function apiFetchOffers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayOffers(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchOffers();

function displayOffers(data) {
    type[0].innerHTML = data.rental[0].scooters[0].type;
    persons[0].innerHTML = data.rental[0].scooters[0].maxPersons;
    fHalfDay[0].innerHTML = data.rental[0].scooters[0].reservation[0].halfDayPrice;
    fFullDay[0].innerHTML = data.rental[0].scooters[0].reservation[0].fullDay;
    sHalfDay[0].innerHTML = data.rental[0].scooters[0].walkIn[0].halfDayPrice;
    sFullDay[0].innerHTML = data.rental[0].scooters[0].walkIn[0].fullDay;

    type[1].innerHTML = data.rental[0].scooters[1].type;
    persons[1].innerHTML = data.rental[0].scooters[1].maxPersons;
    fHalfDay[1].innerHTML = data.rental[0].scooters[1].reservation[0].halfDayPrice;
    fFullDay[1].innerHTML = data.rental[0].scooters[1].reservation[0].fullDay;
    sHalfDay[1].innerHTML = data.rental[0].scooters[1].walkIn[0].halfDayPrice;
    sFullDay[1].innerHTML = data.rental[0].scooters[1].walkIn[0].fullDay;

    type[2].innerHTML = data.rental[0].scooters[2].type;
    persons[2].innerHTML = data.rental[0].scooters[2].maxPersons;
    fHalfDay[2].innerHTML = data.rental[0].scooters[2].reservation[0].halfDayPrice;
    fFullDay[2].innerHTML = data.rental[0].scooters[2].reservation[0].fullDay;
    sHalfDay[2].innerHTML = data.rental[0].scooters[2].walkIn[0].halfDayPrice;
    sFullDay[2].innerHTML = data.rental[0].scooters[2].walkIn[0].fullDay;

    type[3].innerHTML = data.rental[1].ATVs[0].type;
    persons[3].innerHTML = data.rental[1].ATVs[0].maxPersons;
    fHalfDay[3].innerHTML = data.rental[1].ATVs[0].reservation[0].halfDayPrice;
    fFullDay[3].innerHTML = data.rental[1].ATVs[0].reservation[0].fullDay;
    sHalfDay[3].innerHTML = data.rental[1].ATVs[0].walkIn[0].halfDayPrice;
    sFullDay[3].innerHTML = data.rental[1].ATVs[0].walkIn[0].fullDay;

    type[4].innerHTML = data.rental[2].Jeeps[0].type;
    persons[4].innerHTML = data.rental[2].Jeeps[0].maxPersons;
    fHalfDay[4].innerHTML = data.rental[2].Jeeps[0].reservation[0].halfDayPrice;
    fFullDay[4].innerHTML = data.rental[2].Jeeps[0].reservation[0].fullDay;
    sHalfDay[4].innerHTML = data.rental[2].Jeeps[0].walkIn[0].halfDayPrice;
    sFullDay[4].innerHTML = data.rental[2].Jeeps[0].walkIn[0].fullDay;

    type[5].innerHTML = data.rental[2].Jeeps[1].type;
    persons[5].innerHTML = data.rental[2].Jeeps[1].maxPersons;
    fHalfDay[5].innerHTML = data.rental[2].Jeeps[1].reservation[0].halfDayPrice;
    fFullDay[5].innerHTML = data.rental[2].Jeeps[1].reservation[0].fullDay;
    sHalfDay[5].innerHTML = data.rental[2].Jeeps[1].walkIn[0].halfDayPrice;
    sFullDay[5].innerHTML = data.rental[2].Jeeps[1].walkIn[0].fullDay;
}

/* HAMBURGUER BUTTON */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('open');
hamButton.classList.toggle('open');
});
