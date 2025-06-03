import { Box, Button, Stack, TextField } from "@mui/material";
import { motion } from 'framer-motion';
import { useState } from "react";
import { logo, coffee, walle, temp } from "../../../../assets/index";

const images = [logo, coffee, walle, temp, temp];

const positions = ['center', 'right', 'right1', 'left1', 'left'];

const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-100%', scale: 0.5, zIndex: 2 },
    left: { x: '-50%', scale: 0.7, zIndex: 3 },
    right1: { x: '100%', scale: 0.5, zIndex: 2 },
    right: { x: '50%', scale: 0.7, zIndex: 3 },
};


export const ProjectsSection: React.FC = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);


    const handlePrev = () => {
        setPositionIndexes((prevIndex) => {
            const updatePositionIndexes = prevIndex.map((idx) => (idx === 0 ? 4 : idx - 1));
            return updatePositionIndexes;
        });
    };

    const handleNext = () => {
      setPositionIndexes((prevIndex) => {
            const updatePositionIndexes: number[] = prevIndex.map((idx) => (idx + 1) % 5);
            return updatePositionIndexes;
        });
    };
    

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            {/* Carousel Component */}
        <Stack>
            {/* carousel placement */}
            <Box sx={{ height: '50vh'}}>
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ width: '30%', position: 'absolute', maxHeight: '300px', maxWidth: '100%' }}
                    />
                ))}
            </Box>
        </Stack>
            {/* Button and Link Below the Carousel */}
            <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
                <Button variant="contained" onClick={handlePrev}>Prev</Button>
                <TextField 
                    label="Enter a description" 
                    variant="outlined" 
                    sx={{ marginTop: "20px", width: "80%", color: "white" }}
                />
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Stack>

            <Box sx={{ marginTop: "20px" }}>
                <Button 
                    variant="text" 
                    href="https://example.com" 
                    target="_blank"
                    sx={{ color: "#007BFF" }}
                >
                    View Full Project Archive Here!
                </Button>
            </Box>
        </Box>
    );
};
      // <Button className="hover-underline-animation" variant="text" component={Link} to="/Archive" sx={{color: colorScheme.off_white}}> View Full Project Archive Here!</Button>
