import React, { useRef, useEffect, useState } from "react";

export default function Canvas({ color, brushSize, opacity }) {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;

        const resizeCanvas = () => {
            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            const tempCtx = tempCanvas.getContext("2d");
            tempCtx.drawImage(canvas, 0, 0);

            canvas.width = window.innerWidth * 0.9;
            canvas.height = window.innerHeight * 0.6;

            const ctx = canvas.getContext("2d");
            ctx.lineCap = "round";
            ctx.drawImage(tempCanvas, 0, 0);
            ctxRef.current = ctx;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleClear = () => ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
        window.addEventListener("clearCanvas", handleClear);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("clearCanvas", handleClear);
        };
    }, []);

    const startDrawing = (e) => {
        const ctx = ctxRef.current;
        setIsDrawing(true);
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const ctx = ctxRef.current;
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctx.globalAlpha = opacity;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        ctxRef.current.closePath();
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <canvas
                ref={canvasRef}
                style={{
                    border: "1px solid #000",
                    cursor: "crosshair",
                    maxWidth: "100%",
                    height: "auto",
                }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
        </div>
    );
}
