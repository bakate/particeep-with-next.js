import { Grid, useColorMode } from '@chakra-ui/core';
import Router from 'next/router';
import NProgress from 'nprogress';
import DarkModeSwitch from './DarkModeSwitch';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.500' };
  const color = { light: 'black', dark: 'white' };

  return (
    <>
      <Grid
        color={color[colorMode]}
        bg={bgColor[colorMode]}
        templateColumns={{ base: '1fr', md: '30% 70%' }}
        gap=".5rem"
        p="0 2rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <Nav />
        <Hamburger />
        <DarkModeSwitch />
      </Grid>
    </>
  );
};

export default Header;
