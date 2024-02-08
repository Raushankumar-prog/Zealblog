// PostCard.js
import React from 'react';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Liked from '@mui/icons-material/ThumbUpOffAlt';
import Bliked from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import Saved from '@mui/icons-material/BookmarkBorder';
import BSaved from '@mui/icons-material/Bookmark';
import { getRandomColor } from '../Glance/glance';

const PostCard = ({ post, isSaved, handleSavePost, handleLikePost, handleDelete ,isLiked,handleDeletelike}) => {
  return (
    <div className="universe" key={post.id}>
      <Paper className="papersClass">
        <Link to="/mainpage" className="remove">
          <div className="space">
            <div className="headingglance">
              <p className="headingtext">{post.title}</p>
            </div>
            <div className="glancebriefbox">
              <p className="glancebrieftext">{post.content}</p>
            </div>
          </div>
        </Link>
        <div className="little">
          <div className="author">
            <div className="channelicon">
              <AccountCircleIcon fontSize="large" style={{ color: getRandomColor() }} />
            </div>
            <div className="profile">{post.beongsto ? post.beongsto.username : 'Unknown User'}</div>
          </div>
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
      </Paper>
    </div>
  );
};

export default PostCard;
