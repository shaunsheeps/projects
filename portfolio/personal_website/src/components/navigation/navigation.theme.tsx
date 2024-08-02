import { createTheme } from "@mui/material";
import { cinderelaFont } from "assets";

export const NavBarTheme = createTheme({
    typography: {
        fontFamily: 'cinderela',
    },  
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'cinderela';
              font-style: bold;
              font-weight: 200;
              src: url(${cinderelaFont}) format('ttf');
              unicodeRange: U+0000-00FF; /* Define the character set */
            }
          `,
        },
      },
});
