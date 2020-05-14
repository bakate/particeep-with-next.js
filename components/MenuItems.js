import { Select } from '@chakra-ui/core';
import React, { useState } from 'react';
import { useInfos } from './context';

const MenuItems = ({ label, defaultValue, content }) => {
  const { setCurrentCategory, setMoviesPerPage } = useInfos();
  const [value, setValue] = useState(defaultValue);
  const handleChange = e => {
    setValue(e.target.value);
    if (label === 'CATEGORIES') {
      setCurrentCategory(e.target.value);
    }
    if (label === 'Nombre De Films') {
      setMoviesPerPage(parseInt(e.target.value));
    }
  };

  return (
    <Select
      ml={{ md: '1rem' }}
      transition="all 0.2s"
      rounded="md"
      name={label}
      fontWeight="bold"
      _hover={{ bg: 'gray.100', color: 'black' }}
      _focus={{ outline: 0, boxShadow: 'outline' }}
      opacity=".5"
      borderWidth="1px"
      maxW={{ base: '9rem', md: '15rem' }}
      textTransform="uppercase"
      value={value}
      onChange={handleChange}
    >
      <option value={defaultValue}>{defaultValue}</option>
      {content
        .filter(item => item !== defaultValue)
        .map((item, i) => (
          <option key={i}>{item}</option>
        ))}
    </Select>
  );
};

export default MenuItems;
