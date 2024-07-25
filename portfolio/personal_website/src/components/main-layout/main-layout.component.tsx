import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { logoImg } from "assets";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export type MainLayoutProp = {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProp> = ({children}) => {
    return <Box height={"100vh"}>
        <AppBar>
            <Toolbar>
                <Box flexGrow={1}>
                    <AnchorLink>
                        <Box>
                            <img width="54px" height="54px" src={logoImg} alt="logo" />
                            <Typography>Shaunsheeps</Typography>
                        </Box>
                    </AnchorLink>
                </Box>
            </Toolbar>
        </AppBar>
        <Box>
            <Toolbar />
            {children}
        </Box>
         </Box>; 
};