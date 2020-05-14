import { Box } from '@chakra-ui/core';
import React from 'react';
import { useInfos } from './context';
import MenuItems from './MenuItems';
import NavLinks from './NavLinks';

const Nav = () => {
  const { show, categories } = useInfos();

  return (
    <Box
      display={{ base: show ? 'block' : 'none', md: 'flex' }}
      alignItems="center"
      justifyContent="space-evenly"
      textAlign={{ base: 'center' }}
      fontSize="1rem"
    >
      <NavLinks href="/" title="accueil" />
      <MenuItems label="CATEGORIES" defaultValue="all" content={categories} />
    </Box>
  );
};
export default Nav;
