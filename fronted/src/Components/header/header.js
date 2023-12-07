import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
//import WifiChannelIcon from '@mui/icons-material/WifiChannel';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
//import PostAddIcon from '@mui/icons-material/PostAdd';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});



const Header = () => {
    return ( <div>
          <div className="heading">

            <div className="left">
                 <div  className="appicon"><div className="re"><MenuIcon/></div></div>
               
            </div>
            <div className="center">
                         <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }} >
                          <IconButton sx={{ p: '10px' }} aria-label="menu"></IconButton>
                          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search google maps' }}/>
                           <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                           <SearchIcon />
                           </IconButton>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                              <DirectionsIcon />
                            </IconButton>
                          </Paper>
            </div>
            <div className="right">

                <div className='post'>
                         <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}> Upload file <VisuallyHiddenInput type="file" />
                          </Button>
                </div>  
            </div>
          </div>
    </div> );
}
 
export default Header;