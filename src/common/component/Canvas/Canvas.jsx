import React, { useRef, useEffect, useState } from "react";

const Canvas = ({ color, brushSize }) => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 800;
        canvas.height = 500;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = color;
        context.lineWidth = brushSize;

        setCtx(context);

        const handleClear = () => context.clearRect(0, 0, canvas.width, canvas.height);
        window.addEventListener("clearCanvas", handleClear);

        return () => window.removeEventListener("clearCanvas", handleClear);
    }, []);

    useEffect(() => { if (ctx) ctx.strokeStyle = color; }, [color, ctx]);
    useEffect(() => { if (ctx) ctx.lineWidth = brushSize; }, [brushSize, ctx]);

    const startDrawing = (e) => {
        setIsDrawing(true);
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        ctx.closePath();
    };

    return (
        <canvas
            ref={canvasRef}
            style={{ border: "1px solid #000", cursor: "crosshair" }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
        />
    );
};

export default Canvas;
