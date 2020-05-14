import { Box, Image, PseudoBox } from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';

const Logo = () => (
  <Box>
    <PseudoBox _hover={{ cursor: 'pointer' }} alignSelf="center">
      <Link href="/">
        <Image
          src="/logo.png"
          objectFit="cover"
          size="50px"
          mt={{ base: '3' }}
          // p={{ base: '4' }}
          height={{ base: '90px', md: '130px' }}
          width={{ base: '100%' }}
        />
      </Link>
    </PseudoBox>
  </Box>
);

export default Logo;
