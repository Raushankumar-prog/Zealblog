// PostCard.js
import React from 'react';
import './postcard.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Liked from '@mui/icons-material/ThumbUpOffAlt';
import Bliked from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import Saved from '@mui/icons-material/BookmarkBorder';
import BSaved from '@mui/icons-material/Bookmark';
import { getRandomColor } from '../../Glance/glance';

const PostCard = ({ post, isSaved, handleSavePost, handleLikePost, handleDelete ,isLiked,handleDeletelike}) => {
  
  return (
    <div className="universe" key={post.id}>
      <Paper className="papersClass"  sx={{ width: '100%',margin:'0%',padding:'0%'}}>
        <div className="postbinder">
      
          <div className="space">
            <div className="headingglance">
              <p className="headingtext">{post.title}</p>
            </div>
            <div className="glancebriefbox">
              <p className="glancebrieftext">{post.content}</p>
            </div>
          </div>
   
        <div className="little">
       <Link to={post.beongsto ? `/${post.beongsto.id}` : '/unknownUser'} className='link'>
  <div className="author">
    <div className="channelicon">
      <AccountCircleIcon fontSize="large" style={{ color: getRandomColor() }} />
    </div>
    <div className="profile">{post.beongsto ? post.beongsto.username : 'Unknown User'}</div>
  </div>
</Link>

          <div className="like">
            {isLiked ? (
              <Bliked onClick={() => handleDeletelike(post.id)} />
            ) : (
              <Liked style={{ color: getRandomColor() }} onClick={() => handleLikePost(post.id)} />
            )}
          </div>
         {/*<div className="comment">
            <CommentIcon style={{ color: getRandomColor() }} />
            </div>*/}
          <div className="comment">
            {isSaved ? (
              <BSaved onClick={() => handleDelete(post.id)}  />
            ) : (
              <Saved style={{ color: getRandomColor() }} onClick={() => handleSavePost(post.id)} />
            )}
          </div>
        
          
        </div>
        </div>
      </Paper>
    </div>
  );
};

export default PostCard;
