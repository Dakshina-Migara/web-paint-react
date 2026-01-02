import React from "react";
import { Box, Button, Slider, MenuItem, Select, Typography } from "@mui/material";

const Toolbar = ({ color, setColor, brushSize, setBrushSize }) => {
    return (
        <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
            {/* Color Picker */}
            <Select value={color} onChange={(e) => setColor(e.target.value)}>
                <MenuItem value="#000000">Black</MenuItem>
                <MenuItem value="#ff0000">Red</MenuItem>
                <MenuItem value="#00ff00">Green</MenuItem>
                <MenuItem value="#0000ff">Blue</MenuItem>
                <MenuItem value="#ffff00">Yellow</MenuItem>
            </Select>

            {/* Brush Size */}
            <Box sx={{ width: 200 }}>
                <Typography gutterBottom>Brush Size</Typography>
                <Slider
                    value={brushSize}
                    onChange={(e, value) => setBrushSize(value)}
                    min={1}
                    max={50}
                />
            </Box>

            {/* Clear Button */}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => window.dispatchEvent(new Event("clearCanvas"))}
            >
                Clear
            </Button>
        </Box>
    );
};

export default Toolbar;
