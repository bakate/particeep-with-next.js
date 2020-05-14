/* eslint-disable no-nested-ternary */
import { Box, Flex, Grid, IconButton, Stack, Text, useColorMode } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { useInfos } from './context';

const Movie = ({ id, title, category, likes, dislikes }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.800' };
  const color = { light: 'black', dark: 'white' };
  const { deleteMovie, updateLikes } = useInfos();

  return (
    <Grid
      alignItems="center"
      shadow="lg"
      justifyContent="center"
      justifyItems="center"
      color={color[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius="lg"
      border="1px solid white"
      letterSpacing="wider"
      lineHeight="taller"
      gap=".6rem"
      my="1rem"
      py=".5rem"
    >
      <Text as="h2" fontWeight="black">
        {title}
      </Text>

      <Text as="h3" fontSize="italic">
        {category}
      </Text>
      <Stack isInline cursor="pointer">
        <Box
          as={FaRegThumbsUp}
          size="2rem"
          color="green"
          onClick={() => updateLikes(id, 'like', likes)}
        />
        <Text>
          {likes} like{likes <= 1 ? '' : 's'} 😎
        </Text>
      </Stack>
      <Stack isInline cursor="pointer">
        <Box
          as={FaRegThumbsDown}
          color="red"
          size="2rem"
          __active={{ transform: 'scale(1.1)' }}
          onClick={() => updateLikes(id, 'dislike', dislikes)}
        />
        <Text>
          {dislikes} dislike{dislikes <= 1 ? '' : 's'} 😒
        </Text>
      </Stack>

      <Flex justifyContent="end">
        <IconButton
          variant="outline"
          variantColor="red"
          size="sm"
          aria-label="delete"
          icon="delete"
          onClick={() => deleteMovie(id, category)}
        />
      </Flex>
    </Grid>
  );
};

Movie.propTypes = {
  category: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default Movie;
