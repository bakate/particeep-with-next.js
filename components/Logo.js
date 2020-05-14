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
          mt={{ base: '1rem' }}
          px={{ base: '1rem' }}
          size={{ base: '20px', md: '50px' }}
          height={{ base: '150px', md: '130px' }}
          width={{ base: '100%' }}
        />
      </Link>
    </PseudoBox>
  </Box>
);

export default Logo;
