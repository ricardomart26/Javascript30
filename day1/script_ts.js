window.addEventListener('keydown', function (event) {
    var audio = document.querySelector("audio[data-key=\"".concat(event.key.toUpperCase(), "\"]"));
    var keyPressed = document.querySelector(".key[data-key=\"".concat(event.key.toUpperCase(), "\"]"));
    console.log(audio);
    console.log(keyPressed);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    keyPressed.classList.add('playing');
});
function removeTransition(event) {
    if (event.propertyName !== 'transform')
        return;
    this.classList.remove('playing');
}
var keysTags = document.querySelectorAll('.key');
keysTags.forEach(function (key) { return key.addEventListener('transitionend', removeTransition); });
