const input = document.getElementById('input');
const convertBtn = document.getElementById('convert-btn');
const lengthResult = document.getElementById('length-result');
const volumeResult = document.getElementById('volume-result');
const massResult = document.getElementById('mass-result');

convertBtn.addEventListener('click', () => {
    const value = Number(input.value);
    if (isNaN(value)) {
        lengthResult.textContent = 'Please enter a valid number.';
        return;
    }
    const metersToFeet = (value * 3.28084).toFixed(3);
    const feetToMeters = (value / 3.28084).toFixed(3);
    lengthResult.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    const litersToGallons = (value * 0.264172).toFixed(3);
    const gallonsToLiters = (value / 0.264172).toFixed(3);
    volumeResult.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    const kgToPounds = (value * 2.20462).toFixed(3);
    const poundsToKg = (value / 2.20462).toFixed(3);
    massResult.textContent = `${value} kg = ${kgToPounds} pounds | ${value} pounds = ${poundsToKg} kg`;
    
});
