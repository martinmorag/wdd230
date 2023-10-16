/* Windchill indicator */

document.addEventListener('DOMContentLoaded', function() {
    const temperatureElement = document.querySelector('.temperature');
    const windSpeedElement = document.querySelector('.windspeed'); 
    const windChillElement = document.querySelector('.windchill'); 

    function calculateWindChill(temperature, windSpeed) {
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    }

    function updateWindChill() {
        const temperature = parseFloat(temperatureElement.value);
        const windSpeed = parseFloat(windSpeedElement.value);
    
        if (!isNaN(temperature) && !isNaN(windSpeed)) {
            if (temperature <= 50 && windSpeed > 3.0) {
                const windChill = calculateWindChill(temperature, windSpeed);
                windChillElement.textContent = `${windChill.toFixed(2)}°F`;
            } else {
                windChillElement.textContent = 'N/A';
            }
        }
    }

    // Add event listeners to update the wind chill whenever the input values change
    temperatureElement.addEventListener('input', updateWindChill);
    windSpeedElement.addEventListener('input', updateWindChill);
    
    // Initial calculation
    updateWindChill();
});
