import React, { useState } from 'react';
import './channel.css';
import img from '../Glance/OIP.jpeg';
import solar from './solar.jpg';
import Authorpost from '../channel_template/channel_component/authorpost/authorpost';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  customButton: {
   marginLeft:'1.5%',
   marginRight:'1.5%',
   marginTop:'2%',
  },
}));


const Channel = () => {
  const [showAuthorPost, setShowAuthorPost] = useState(false);
 const classes = useStyles(); 
  const authoro = () => {
    setShowAuthorPost(true);
  };

  return (
    <div className="channel">
      <div className="upper">
        <div className="bannerbox">
          <img src={solar} id="imagebanner" alt="Banner" />
        </div>

        <div className="channelnamebox">
          <div className="profileimagebox">
            <img src={img} className="profileimage" alt="Profile" />
          </div>
          <div className="userprofiletext">
            <div className="profilenamebox">
              <p className="mainheading">RAUSHAN KUMAR</p>
            </div>
            <div className="userworkplace">scientist, CERN LAB</div>
          </div>
        </div>

        <div className="channelheading" >
            <Button variant="contained" onClick={authoro} disableElevation className={classes.customButton}><span className="userniche">Post</span></Button>
           <Button variant="contained" onClick={authoro} disableElevation className={classes.customButton}> <span className="userniche">Niche</span></Button> 
           <Button variant="contained" onClick={authoro} disableElevation  className={classes.customButton}><span className="userniche">About</span></Button>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>
      <div className="lower">
        {showAuthorPost && <Authorpost />}
      </div>
    </div>
  );
};

export default Channel;

           
      
         