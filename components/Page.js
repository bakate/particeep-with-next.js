import { ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import Meta from './Meta';
import theme from './theme';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider>
      <Meta />
      <Container>{children}</Container>
    </ColorModeProvider>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
