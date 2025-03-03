import { Navigation } from 'components/navigation/navigation.components';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from 'types';

export type MainLayoutProp = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProp> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height={'100vh'} sx={{backgroundColor: '#c0a891'}}>
      <AppBar position="fixed" sx={{ background: 'black' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink href={`#${SectionIdEnum.about}`} offset={isSmall ? '56px' : '64px'} className='all_unset' style={{color: "transparent"}}>
              <Box display="flex" alignItems="center" gap={0.5} sx= {{ cursor: 'pointer' }}>
                <Typography variant="h2" sx={{ width: 'fit-content', color: 'white', fontFamily: 'cinderela' }}>
                  {' '}
                  About Me
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isSmall={isSmall} />
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
