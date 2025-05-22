import { Box, Button, Grid, Typography, Container} from "@mui/material";
import { SectionIdEnum, colorScheme } from "types";
import profilePic from "../../../../assets/profile_pic.jpeg";

export const AboutSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{display: "flex", alignItems: "center", minHeight: '76vh'}}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Typography sx= {{color: colorScheme.golden_yellow, fontSize: '24px', fontWeight: '400' }}> Hello, Welcome!</Typography>
          <Typography sx= {{color: colorScheme.off_white, fontSize: '48px', fontWeight: '700', marginTop: 1}}> I'm Shawn Fong</Typography>
          <Typography sx= {{color: colorScheme.grey, fontSize: '24px', fontWeight: '400', marginTop: 2}}> A recent graduate with a degree in Computer Science and Business from Washington University in St. Louis. And this is my website! I hope you enjoy what you see!</Typography>
          <Button href={`#${SectionIdEnum.contact}`} 
            sx ={{
            color: 'black',
            marginTop: 3, 
            backgroundColor: colorScheme.bright_yellow, 
            padding: '8px 20px',
            fontWeight: '600',
            '&:hover': {backgroundColor: colorScheme.off_white},
            }}>
            Contact Me
          </Button>
        </Grid>

        {/* Right Column */}
        <Grid item container justifyContent={{ xs: "center", md: "flex-end" }} xs={12} md={6}>
          <Box 
            component="img" 
            src={profilePic} 
            sx={{
              width: "100%",
              maxWidth: 500,
              height: "auto",
              borderRadius: 8,
            }} />
        </Grid>
      </Grid>
    </Container>
  );
};
