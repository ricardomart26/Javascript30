function handleUpdates() {
    var suffix = this.dataset.sizing;
    document.documentElement.style.setProperty("--".concat(this.name), this.value + suffix);
}
var input = document.querySelectorAll('.controls input');
input.forEach(function (input) {
    input.addEventListener('change', handleUpdates);
    input.addEventListener('mouseover', handleUpdates);
});
