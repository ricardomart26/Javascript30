var canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.strokeStyle = "#BADA55";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.globalCompositeOperation = "multiply";
var direction = false;
var hue = 0;
var lastX, lastY = 0;
var isPressed = false;
function drawOnCanvas(e) {
    var _a;
    if (!isPressed)
        return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
        direction = !direction;
    if (direction)
        ctx.lineWidth++;
    else
        ctx.lineWidth--;
    hue++;
    if (hue >= 360)
        hue = 0;
    ctx.strokeStyle = "hsl(".concat(hue, ", 100%, 50%)");
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
}
window.addEventListener('mousemove', drawOnCanvas);
window.addEventListener('mousedown', function (e) {
    var _a;
    isPressed = true;
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
});
window.addEventListener('mouseup', function () { return isPressed = false; });
window.addEventListener('mouseout', function () { return isPressed = false; });
