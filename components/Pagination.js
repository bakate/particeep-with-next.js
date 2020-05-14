import { Flex, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { useInfos } from './context';
import MenuItems from './MenuItems';

const Pagination = () => {
  const { moviesPerPage } = useInfos();
  const pagesRanges = [4, 8, 12];
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.500' };
  const color = { light: 'black', dark: 'white' };

  return (
    <Flex
      p="0 2rem"
      align="center"
      justify="flex-end"
      color={color[colorMode]}
      bg={bgColor[colorMode]}
    >
      <MenuItems
        label="Nombre De Films"
        defaultValue={moviesPerPage}
        content={pagesRanges}
      />
    </Flex>
  );
};

export default Pagination;
