import { Box, Typography } from "@mui/material";
import Carousel from "./carousel.section";
import logo from "../../../../assets/logo.jpeg";

const slides = [logo]

export const ProjectsSection: React.FC = () => {
  return (
    <Box py = {4}>
      <Typography variant="h6">Welcome to the My projects displayed in a timeline fashion</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>
        HerdingSheep
      </Typography>
      <Typography variant="h5" mb={3}>
        I'm currently seeking fun projects to do
      </Typography>
      <Carousel slides={slides}/>
      <Typography maxWidth={500}>
        Thanks for being interested in my website!
      </Typography>
    </Box>
  );
};
