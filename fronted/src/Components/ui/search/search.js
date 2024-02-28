import React, { useState, createContext, useContext } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const Context = createContext();

export function usePost() {
  return useContext(Context);
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    // Handle search logic as needed
   // console.log('Search term:', searchTerm);
  };

  const handleMenuClick = () => {
    // Handle menu icon click as needed
    // console.log('Menu icon clicked');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
const searhTerm="apple";
  return (
    <>
      <Context.Provider value={{ searhTerm }}>
        <div className="searchthepost">
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={handleMenuClick}>
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search google maps' }}
              id='searched'
              value={searchTerm}
              onChange={handleInputChange}
            />
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="search"
              onClick={handleSearchClick}
            >
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </div>
      </Context.Provider>
    </>
  );
};

export default Search;
