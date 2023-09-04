import { useEffect, useRef } from "react";

const Canvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);



    // const canvas = document.getElementById("draw") as HTMLCanvasElement;
    
    let direction: boolean = false;
    let hue: number = 0;
    let ctx: CanvasRenderingContext2D;
    let lastX: number, lastY: number = 0;
    let isDrawing: boolean = false;
    
    const draw = (e: MouseEvent) => {
        
        console.log("draw");
        if (!isDrawing)
        return;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        
        hue++;
        if (hue > 360)
        hue = 0;
    
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
            direction = !direction;
        
        if (direction)
            ctx.lineWidth++;
        else
            ctx.lineWidth--;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    const gameLoop = () => {

        window.addEventListener("mousedown", (e: MouseEvent) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });
        window.addEventListener("mousemove", draw);
        window.addEventListener("mouseup", () => isDrawing = false);
        window.addEventListener("mouseout", () => isDrawing = false);
    }
    
    useEffect(() => {
        const canvas = canvasRef.current;
        
        if (!canvas) return ; 
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D;
        
        ctx.strokeStyle = "BADA55";
        ctx.globalCompositeOperation = "multiply";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        gameLoop();
        
    }, []);
    
    return (<canvas id="draw" ref={canvasRef} width={800} height={800}></canvas>);
}

export default Canvas;