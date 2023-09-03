
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegres = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minutesDegres = ((minutes / 60) * 360) + 90;

    const hour = now.getHours();
    const hoursDegres = ((hour / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegres}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegres}deg)`;
    hourHand.style.transform = `rotate(${hoursDegres}deg)`;
}

setInterval(setDate, 1000);