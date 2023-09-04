




const canvasTag  = document.querySelector('#draw') as HTMLCanvasElement;

canvasTag.width = window.innerWidth;
canvasTag.height = window.innerHeight;

const ctx = canvasTag.getContext('2d') as CanvasRenderingContext2D;
ctx.strokeStyle = "#BADA55";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.globalCompositeOperation = "multiply";

let d: boolean = false;
let hueColor: number = 0;
let lastPositionX: number, lastPositionY: number = 0;
let isPressed: boolean = false;

function drawOnCanvas(e: MouseEvent)
{
    if (!isPressed)
        return ;

    ctx.beginPath();
    ctx.moveTo(lastPositionX, lastPositionY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
        d = !d;

    if (d)
        ctx.lineWidth++;
    else
        ctx.lineWidth--;

    hueColor++;
    if (hueColor >= 360)
        hueColor = 0;
    ctx.strokeStyle = `hsl(${hueColor}, 100%, 50%)`;
    [lastPositionX, lastPositionY] = [e.offsetX, e.offsetY]
}


canvasTag.addEventListener('mousemove', drawOnCanvas);
canvasTag.addEventListener('mousedown', (e: MouseEvent) => {
    isPressed = true;
    [lastPositionX, lastPositionY] = [e.offsetX, e.offsetY]
});

canvasTag.addEventListener('mouseup', () => isPressed = false);
canvasTag.addEventListener('mouseout', () => isPressed = false);
