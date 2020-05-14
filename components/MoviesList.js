import { Alert, AlertIcon, Box, Button, Flex, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import { useInfos } from './context';
import Movie from './Movie';
import Title from './Title';

const Movies = () => {
  const { loading, sorted, pages, changePage, categories } = useInfos();

  if (sorted?.[pages]) {
    return (
      <>
        <SimpleGrid
          minChildWidth="250px"
          spacing={{ base: '1rem', md: '2rem' }}
        >
          {sorted[pages].map(movie => (
            <Movie key={movie.id} {...movie} />
          ))}
        </SimpleGrid>
        <Flex mx="auto">
          {sorted.length > 1 && (
            <Box>
              {pages > 0 && (
                <Button
                  variant="outline"
                  variantColor="red"
                  rightIcon="arrow-left"
                  onClick={() => changePage(pages - 1)}
                  mr={3}
                />
              )}
              {sorted.map((_, index) => (
                <Button
                  key={index}
                  opacity={pages === index ? '1' : '.5'}
                  onClick={() => changePage(index)}
                  mr={3}
                >
                  {index + 1}
                </Button>
              ))}
              {pages < sorted.length - 1 && (
                <Button
                  variant="outline"
                  variantColor="red"
                  rightIcon="arrow-right"
                  onClick={() => changePage(pages + 1)}
                />
              )}
            </Box>
          )}
        </Flex>
      </>
    );
  }
  if (loading) {
    return <Title title="chargement en cours" center />;
  }
  if (!categories.length) {
    return (
      <Alert status="error" mx="auto">
        <AlertIcon />
        Rupture de films 😒
      </Alert>
    );
  }

  return (
    <Alert status="info" mx="auto">
      <AlertIcon />
      il n'y a plus de films malheureusement pour cette catégorie
    </Alert>
  );
};

export default Movies;
