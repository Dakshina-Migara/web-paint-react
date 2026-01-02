import React from "react";
import { Box, Button, Slider, TextField, Typography } from "@mui/material";

export default function Toolbar({ color, setColor, brushSize, setBrushSize, opacity, setOpacity }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: { xs: "20px", sm: "30px", md: "50px" },
                    justifyContent: "center",
                }}
            >
                <Box>
                    <Typography gutterBottom>Brush Color</Typography>
                    <TextField
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        sx={{ width: 50, height: 40, padding: 0 }}
                    />
                </Box>

                <Box sx={{ minWidth: { xs: 100, sm: 150 } }}>
                    <Typography gutterBottom>Brush Size</Typography>
                    <Slider
                        value={brushSize}
                        onChange={(e, value) => setBrushSize(value)}
                        min={1}
                        max={50}
                        sx={{ width: "100%" }}
                    />
                </Box>

                <Box sx={{ minWidth: { xs: 100, sm: 150 } }}>
                    <Typography gutterBottom>Brush Opacity</Typography>
                    <Slider
                        value={opacity}
                        onChange={(e, value) => setOpacity(value)}
                        min={0.1}
                        max={1}
                        step={0.05}
                        sx={{ width: "100%" }}
                    />
                </Box>

                <Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => window.dispatchEvent(new Event("clearCanvas"))}
                    >
                        Eraser
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
