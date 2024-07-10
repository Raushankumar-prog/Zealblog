import React, { useState } from 'react';
import './Channel.css';
import Authorpost from './Component/AuthorPost';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { profilepost } from '../../../Service/HttpRequest/ApiService';
import { useQuery } from '@tanstack/react-query';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((theme) => ({
  customButton: {
   marginLeft: '1.5%',
   marginRight: '1.5%',
   marginTop: '2%',
  },
}));

const Channel = (props) => {
  const { providedId } = props;
  const [showAuthorPost, setShowAuthorPost] = useState(false);
  const classes = useStyles();

  const { data: profilePosts, isLoading, error } = useQuery({
    queryKey: ['profilePosts', providedId],
    queryFn: () => profilepost(providedId),

  });

  const authoro = () => {
    setShowAuthorPost(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile posts</div>;
  }

  return (
    <div className="channel">
      <div className="upper">
        <div className="bannerbox">
          <LazyLoad  offset={500}>
          <img src={profilePosts?.getmyprofile?.imagebannerurl} id="imagebanner" alt="Banner" />
          </LazyLoad>
        </div>

        <div className="channelnamebox">
          <div className="profileimagebox">
            <img src={profilePosts?.getmyprofile?.userimage} className="profileimage" alt="Profile" />
          </div>
          <div className="userprofiletext">
            <div className="profilenamebox">
              <p className="mainheading">{profilePosts?.getmyprofile?.username}</p>
              <p className="mainheading">{profilePosts?.getmyprofile?.profession}</p>
            </div>
          </div>
        </div>
        <div className="description">
          <p className="mainheading">{profilePosts?.getmyprofile?.description}</p>
        </div>

        <div className="channelheading">
          <Button variant="contained" onClick={authoro} disableElevation className={classes.customButton}>
            <span className="userniche">Post</span>
          </Button>
          <Button variant="contained" onClick={authoro} disableElevation className={classes.customButton} style={{ marginLeft: "2%" }}>
            <span className="userniche">Niche</span>
          </Button>
          <Button variant="contained" onClick={authoro} disableElevation className={classes.customButton} style={{ marginLeft: "2%" }}>
            <span className="userniche">About</span>
          </Button>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>
      <div className="lower">
        {showAuthorPost && <Authorpost loggedInUserId={providedId} />}
      </div>
    </div>
  );
};

export default Channel;
