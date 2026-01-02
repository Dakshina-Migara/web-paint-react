import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Toolbar from "../../common/component/ToolBar/Toolbar.jsx";
import Canvas from "../../common/component/Canvas/Canvas.jsx";

export default function PaintApp() {
    const [color, setColor] = useState("#000000");
    const [brushSize, setBrushSize] = useState(5);

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                React Paint App
            </Typography>
            <Toolbar
                color={color}
                setColor={setColor}
                brushSize={brushSize}
                setBrushSize={setBrushSize}
            />
            <Canvas color={color} brushSize={brushSize} />
        </Box>
    );
}
