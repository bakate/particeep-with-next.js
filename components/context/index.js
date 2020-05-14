// import { useToast } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Paginate from '../../lib/helper';
import { movies$ } from './movies';
import socialData from './socialData';

const Infos = createContext();

const MamaContext = ({ children }) => {
  // const toast = useToast();
  const [social] = useState(socialData);
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [movies, setMovies] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [pages, setPages] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [moviesPerPage, setMoviesPerPage] = useState(8);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [height, setHeight] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      movies$.then(response => {
        setMovies(response);
        setSorted(Paginate(moviesPerPage, response));
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    return () => {};
  }, [moviesPerPage]);

  useEffect(() => {
    setCategories([...new Set(movies.map(movie => movie.category))]);
    return () => {};
  }, [movies]);
  useEffect(() => {
    let newFilteredArray = [...movies];
    if (currentCategory !== 'all') {
      newFilteredArray = newFilteredArray.filter(
        item => item.category === currentCategory
      );
    }
    setPages(0);
    setSorted(Paginate(moviesPerPage, newFilteredArray));
  }, [currentCategory, movies, moviesPerPage]);

  const changePage = index => setPages(index);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  const updateLikes = (id, userChoice, amount) => {
    let mergingArrays = sorted.flat(Infinity);
    mergingArrays = mergingArrays.map(item => {
      if (item.id === id) {
        if (item.vote === userChoice || item.isFavorite) {
          if (userChoice === 'like') {
            return {
              ...item,
              vote: '',
              isFavorite: false,
              likes: item.likes - 1,
            };
          }
          if (userChoice === 'dislike') {
            return {
              ...item,
              vote: '',
              isFavorite: false,
              dislikes: item.dislikes + 1,
            };
          }
        }
        if (userChoice === 'like') {
          return {
            ...item,
            vote: 'like',
            isFavorite: false,
            likes: item.likes + 1,
          };
        }
        if (userChoice === 'dislike') {
          if (amount === 0) {
            return { ...item };
          }
          return {
            ...item,
            vote: 'dislike',
            isFavorite: false,
            dislikes: item.dislikes - 1,
          };
        }
      }
      return item;
    });
    setSorted(Paginate(moviesPerPage, mergingArrays));
  };

  const deleteMovie = (id, singleCategory) => {
    let mergingArrays = sorted.flat(Infinity);
    mergingArrays = mergingArrays.filter(item => item.id !== id);
    if (mergingArrays.length === 1 && pages > 1) {
      setPages(pages - 1);
    }
    if (
      mergingArrays.filter(movie => movie.category === singleCategory).length <=
      1
    ) {
      const removedCategory = categories.filter(
        item => item !== singleCategory
      );
      setCategories(removedCategory);
    }

    return setSorted(Paginate(moviesPerPage, mergingArrays));
  };

  return (
    <Infos.Provider
      value={{
        height,
        social,
        updateLikes,
        show,
        deleteMovie,
        loading,
        categories,
        setCurrentCategory,
        sorted,
        setMoviesPerPage,
        moviesPerPage,
        setCategories,
        changePage,
        pages,
        handleToggle,
      }}
    >
      {children}
    </Infos.Provider>
  );
};

MamaContext.propTypes = {
  children: PropTypes.object,
};

const useInfos = () => {
  const res = useContext(Infos);
  return res;
};

export { MamaContext, useInfos };

