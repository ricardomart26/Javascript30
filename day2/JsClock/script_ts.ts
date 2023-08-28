
function setClockDate(): void {

    const secondHand: HTMLDivElement = document.querySelector('.second-hand') as HTMLDivElement; 
    const minHand: HTMLDivElement = document.querySelector('.min-hand') as HTMLDivElement; 
    const hourHand: HTMLDivElement = document.querySelector('.hour-hand') as HTMLDivElement; 

    const now: Date = new Date();

    const secondsDegres: number = ((now.getSeconds() / 60) * 360) + 90;
    const minutesDegres: number = ((now.getMinutes() / 60) * 360) + 90;
    const hoursDegres: number = ((now.getHours() / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegres}deg)`;
    minHand.style.transform = `rotate(${minutesDegres}deg)`;
    hourHand.style.transform = `rotate(${hoursDegres}deg)`;
}

setInterval(setClockDate, 1000);