import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Toolbar from '../../common/component/ToolBar/Toolbar.jsx';
import Canvas from "../../common/component/Canvas/Canvas.jsx";

export default function PaintApp() {
    const [color, setColor] = useState("#000000");
    const [brushSize, setBrushSize] = useState(5);
    const [opacity, setOpacity] = useState(1);

    return (
        <Box
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    textAlign: "center",
                    mb: 2,
                    fontWeight: 'bold',
                    color: 'blue',
                    fontFamily:'Blackadder ITC'
                }}
            >
                Paint App
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    mb: 2,
                }}
            >
                <Toolbar
                    color={color}
                    setColor={setColor}
                    brushSize={brushSize}
                    setBrushSize={setBrushSize}
                    opacity={opacity}
                    setOpacity={setOpacity}
                />
            </Box>

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Canvas color={color} brushSize={brushSize} opacity={opacity} />
            </Box>
        </Box>
    );
}
