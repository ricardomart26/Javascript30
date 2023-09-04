var checkboxList = document.querySelectorAll('.inbox input[type="checkbox"]');
var firstChecked;
var lastChecked;
function handleCheckboxClicked(e) {
    var inBetween = false;
    if (e.shiftKey || this.checked) {
        if (!firstChecked) {
            firstChecked = this;
            return;
        }
        lastChecked = this;
        checkboxList.forEach(function (checkbox) {
            if (checkbox === firstChecked || checkbox === lastChecked) {
                checkbox.checked = true;
                inBetween = !inBetween;
            }
            if (inBetween)
                checkbox.checked = true;
        });
    }
}
checkboxList.forEach(function (checkbox) { return checkbox.addEventListener('click', handleCheckboxClicked); });
