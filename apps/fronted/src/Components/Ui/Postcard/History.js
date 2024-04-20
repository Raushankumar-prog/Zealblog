// History.js
import React from 'react';
import './Postcard.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const History = ({ article }) => {
  console.log(article);
  return (
    <div className="universe" key={article.id}>
      <Paper className="papersClass" sx={{ width: '100%', margin: '0%', padding: '0%' }}>
        <div className="postbinder">

          <div className="space">
            <div className="headingglance">
              <p className="headingtext">{article.belongstoposts.title}</p>
            </div>
            <div className="glancebriefbox">
              <img src={article.postImageUrl} width="100%" height="200px" alt="Post Image" />
              <p className="glancebrieftext">{article.belongstoposts.content}</p>
            </div>
          </div>

          <div className="little">
            <Link to={article.belongsto ? `/${article.belongsto.id}` : '/unknownUser'} className='link'>
              <div className="author">
                <div className="channelicon">
                  {article.userImageUrl ? <img src={article.userImageUrl} alt="User Image" id="userimage" className='signupimage' /> : <AccountCircleIcon fontSize="large" />}
                </div>
                <div className="profile">{article.belongsto ? article.belongsto.username : 'Unknown User'}</div>
              </div>
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default History;
