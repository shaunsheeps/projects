import { Box, Typography } from "@mui/material";

export const AboutSection: React.FC = () => {
  return (
    <Box py = {4} sx={{color: 'green'}}>
      <Typography variant="h2" mb={1} fontWeight={500}>
      </Typography>
      Welcome!
      <Typography variant="h5" mb={3}>
        I'm currently seeking fun projects to do
      </Typography>
      <Typography maxWidth={500}>
        Thanks for being interested in my website! 
      </Typography>
    </Box>
  );
};
