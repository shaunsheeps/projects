import { Box, Typography } from "@mui/material";
import Carousel from "./carousel.section";
import logo from "../../../../assets/logo.jpeg";

const slides = [logo];

//  the function for the project section
export const ProjectsSection: React.FC = () => {
  return (
    <Box py = {4} sx={{textAlign: "center"}}>
      <Typography variant="h1" mb={3}>My Projects </Typography>
      <Typography variant="subtitle1">
        Welcome to my projects! Feel free to click on them for more descriptions.
      </Typography>
      <Carousel slides={slides} />
    </Box>
  );
};
//  mb = spacing
