import React from 'react';
import './Postcard.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Button } from '@mui/material';
import LazyLoad from 'react-lazyload';

const Template = React.memo(({ post }) => {
  return (
   
         
    <article className="universe" key={post.id}>
      <Paper className="papersClass" id="papercl">
        <div className="postbinder">
          <Link to={`/content/${post.id}`} className='remove' aria-label={`Read more about ${post.title}`}>
            <section className="space">
              <header className="headingglance">
                <h2 className="headingtext">{post.title}</h2>
              </header>
              <div className="glancebriefbox">
                <Link to={`/videoplayed/${post?.id}`} className="remove">
                  <Button variant="contained" aria-label={`Watch video summary for ${post.title}`}>Video Summary</Button>
                </Link>
                <AspectRatio.Root ratio={16 / 9}>
                  <LazyLoad  offset={100}>
                    <img src={post.imageUrl}  className="imagefor"   alt={` for ${post.title}`} loading="lazy" />
                  </LazyLoad>
                </AspectRatio.Root>
                <p className="glancebrieftext">{post.content}</p>
              </div>
            </section>
          </Link>
          <footer className="little">
            <Link to={post.beongsto ? `/U/${post.beongsto.id}` : '/unknownUser'} className='link' aria-label={`Visit ${post.beongsto ? post.beongsto.username : 'Unknown User'}'s profile`}>
              <div className="author">
                <div className="channelicon">
                  {post.userimage ? (
                    <img src={post.userimage} alt={`Profile of ${post.beongsto ? post.beongsto.username : 'Unknown User'}`} id="userimage" className='signupimage' />
                  ) : (
                    <AccountCircleIcon fontSize="large" />
                  )}
                </div>
                <div className="profile">{post.beongsto ? post.beongsto.username : 'Unknown User'}</div>
              </div>
            </Link>
          </footer>
        </div>
      </Paper>
    </article>
  );
});

export default Template;
