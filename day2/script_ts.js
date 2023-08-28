function setClockDate() {
    var secondHand = document.querySelector('.second-hand');
    var minHand = document.querySelector('.min-hand');
    var hourHand = document.querySelector('.hour-hand');
    var now = new Date();
    var secondsDegres = ((now.getSeconds() / 60) * 360) + 90;
    var minutesDegres = ((now.getMinutes() / 60) * 360) + 90;
    var hoursDegres = ((now.getHours() / 12) * 360) + 90;
    secondHand.style.transform = "rotate(".concat(secondsDegres, "deg)");
    minHand.style.transform = "rotate(".concat(minutesDegres, "deg)");
    hourHand.style.transform = "rotate(".concat(hoursDegres, "deg)");
}
setInterval(setClockDate, 1000);
