// History.js
import React from 'react';
import './Postcard.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';


   
const History = ({ article }) => {
  console.log(article);
  return (
    <article className="universe" key={article.id}>
      <Paper className="papersClass" id="papercl">
        <div className="postbinder">

          <div className="space">
            <footer className="headingglance">
              <h2 className="headingtext">{article.belongstoposts.title}</h2>
            </footer>
            <div className="glancebriefbox">
              <AspectRatio.Root ratio={16 / 9}>
              <img src={article.postImageUrl}  className="imagefor"  alt={article.title}  loading='lazy' />
              </AspectRatio.Root>
              <p className="glancebrieftext">{article.belongstoposts.content}</p>
            </div>
          </div>

          <div className="little">
            <Link to={article.belongsto ? `/${article.belongsto.id}` : '/unknownUser'} className='link'>
              <footer className="author">
                <div className="channelicon">
                  {article.userImageUrl ? <img src={article.userImageUrl} alt="User" id="userimage" className='signupimage' /> : <AccountCircleIcon fontSize="large" />}
                </div>
                <div className="profile">{article.belongsto ? article.belongsto.username : 'Unknown User'}</div>
              </footer>
            </Link>
          </div>
        </div>
      </Paper>
    </article>
  );
};

export default History;
