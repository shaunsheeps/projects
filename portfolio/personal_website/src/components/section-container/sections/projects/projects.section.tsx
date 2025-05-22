import "./project.section.css";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { colorScheme } from "types";
import Carousel from "./carousel.section";
import logo from "../../../../assets/logo.jpeg";

const slides = [logo];

//  the function for the project section
export const ProjectsSection: React.FC = () => {
  return (
    <Box py = {4} sx={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh"}}>
      <Carousel slides={slides} />
      <Button className="hover-underline-animation" variant="text" component={Link} to="/Archive" sx={{color: colorScheme.off_white}}> View Full Project Archive Here!</Button>
    </Box>
  );
};
