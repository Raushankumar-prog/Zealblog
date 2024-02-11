import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState,createContext} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { makeRequest } from '../fetch/fetch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { handleSearch } from '../services/apiService';
export const SearchContext = createContext();
const Header = () => {
 const [query, setQuery] = useState('');

  return (
     <SearchContext.Provider value={{ query, setQuery }}>
    <div>
      <div className="heading">
        <div className="center">
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
            }}
          >
            <IconButton
              sx={{ p: '10px' }}
              aria-label="menu"
            ></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search google maps' }}
              className="searchbox"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
               <IconButton
                type="button"
               sx={{ p: '10px' }}
                aria-label="search"
               onClick={() => handleSearch(query)}
                   >
                  <Link to="search"><SearchIcon /></Link>
              </IconButton>

           
          </Paper>
        </div>
      </div>
    </div>
    </SearchContext.Provider>
  );
};

export default Header;
