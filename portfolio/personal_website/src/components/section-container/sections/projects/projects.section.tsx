import "./project.section.css";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { colorScheme } from "types";
import Carousel from "./carousel.section";


//  the function for the project section
export const ProjectsSection: React.FC = () => {
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh"}}>
      <Carousel/>
      {/* <Button className="hover-underline-animation" variant="text" component={Link} to="/Archive" sx={{color: colorScheme.off_white}}> View Full Project Archive Here!</Button> */}
    </Box>
  );
};
