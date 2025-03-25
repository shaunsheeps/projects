import { Box, Button, Grid, Typography} from "@mui/material";
import { colorScheme } from "types";


export const AboutSection: React.FC = () => {
  return (
    <Box py = {4}>
      <Grid container alignItems="center">
        {/* Left Column with all the texts */}
        <Grid item xs={12} md={6}>
          <Typography sx= {{color: colorScheme.golden_yellow, fontSize: '24px', fontWeight: '400' }}> Hello, Welcome</Typography>
          <Typography sx= {{color: colorScheme.off_white, fontSize: '48px', fontWeight: '700', marginTop: 1}}> I'm Shawn Fong</Typography>
          <Typography sx= {{color: colorScheme.grey, fontSize: '24px', fontWeight: '400', marginTop: 2}}> And this is my website! I hope you enjoy what you see!</Typography>
          <Button sx ={{color: 'black'}}> Contact Me</Button>
        </Grid>

        {/* Right Column with the profile picture */}
        <Grid>

        </Grid>
      </Grid>
    </Box>
  );
};
