import { AppBar, Box, Button, Dialog, IconButton, Slide, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from 'types';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { NavBarTheme } from './navigation.theme';

export type NavigationProps = {
  isSmall: boolean;
};

const navigationItems = [
  {
    text: 'Intro',
    to: SectionIdEnum.intro,
  },
  {
    text: 'About',
    to: SectionIdEnum.about,
  },
  {
    text: 'Projects',
    to: SectionIdEnum.projects,
  },
  {
    text: 'Resume',
    to: SectionIdEnum.resume,
  },
  {
    text: 'Interests',
    to: SectionIdEnum.interests,
  },
  {
    text: 'Contact',
    to: SectionIdEnum.contact,
  },
];

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any>;
    },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  },
);

export const Navigation: React.FC<NavigationProps> = ({ isSmall }) => {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const mappedItems = navigationItems.map(({ text, to }) => {
    return (
      <AnchorLink key={to} href={`#${to}`} offset={isSmall ? '56px' : '64px'} className="all_unset">
        <Button size="large" fullWidth={isSmall} onClick={onCloseHandler} sx={{color: 'white'}}>
          <ThemeProvider theme={NavBarTheme}>
            <Typography variant="h4" sx={{ textTransform: 'none'}}>
              {text}
            </Typography>
          </ThemeProvider>
        </Button>
      </AnchorLink>
    );
  });

  return (
    <>
      <Box display="flex" gap={2} sx={{ display: { xl: 'block', sm: 'none', xs: 'none' } }}>
        {mappedItems}
      </Box>
      <IconButton color="inherit" onClick={onOpenHandler} sx={{ display: { xs: 'block', sm: 'block', xl: 'none' } }}>
        <Menu />
      </IconButton>
      <Dialog
        open={open}
        fullScreen
        fullWidth
        TransitionComponent={Transition}
        hideBackdrop
        PaperProps={{
          sx: {
            boxShadow: 'none',
          },
        }}
      >
        <AppBar position="static" sx={{ background: 'white', color: 'text.primary' }}>
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <IconButton color="inherit" onClick={onCloseHandler}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box display="flex" flexDirection="column" py={3} width="100%">
          {mappedItems}
        </Box>
      </Dialog>
    </>
  );
};
