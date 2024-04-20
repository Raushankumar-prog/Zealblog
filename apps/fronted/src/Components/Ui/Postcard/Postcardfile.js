// PostCard.js
import React from 'react';
import './Postcard.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Liked from '@mui/icons-material/ThumbUpOffAlt';
import Bliked from '@mui/icons-material/ThumbUpAlt';
import Saved from '@mui/icons-material/BookmarkBorder';
import BSaved from '@mui/icons-material/Bookmark';


const PostCardfile = ({ post, isSaved, handleSavePost, handleLikePost, handleDelete ,isLiked,handleDeletelike}) => {
   
  return (
    <div className="universe" key={post.id}>
      <Paper className="papersClass"  sx={{ width: '100%',margin:'0%',padding:'0%'}}>
        <div className="postbinder">
      
          <div className="space">
            <div className="headingglance">
              <p className="headingtext">{post.belongstoposts.title}</p>
            </div>
            <div className="glancebriefbox">
              <img src={post.imageUrl} width="100%" height="200px"/>
              <p className="glancebrieftext">{post.belongstoposts.content}</p>
            </div>
          </div>
   
        <div className="little">
       <Link to={post.beongsto ? `/${post.beongsto.id}` : '/unknownUser'} className='link'>
  <div className="author">
    <div className="channelicon">
    {post.userimage ? <img src={post.userimage} alt="Post Image" id="userimage" className='signupimage'/> : <AccountCircleIcon fontSize="large" />}

    </div>
    <div className="profile">{post.belongstoposts.beongsto ? post.belongstoposts.beongsto.username : 'Unknown User'}</div>
  </div>
</Link>

          <div className="like">
            {isLiked ? (
              <Bliked onClick={() => handleDeletelike(post.belongstoposts.id)} />
            ) : (
              <Liked  onClick={() => handleLikePost(post.belongstoposts.id)} />
            )}
          </div>
         {/*<div className="comment">
            <CommentIcon style={{ color: getRandomColor() }} />
            </div>*/}
          <div className="comment">
            {isSaved ? (
              <BSaved onClick={() => handleDelete(post.belongstoposts.id)}  />
            ) : (
              <Saved  onClick={() => handleSavePost(post.belongstoposts.id)} />
            )}
          </div>
        
          
        </div>
        </div>
      </Paper>
    </div>
  );
};

export default PostCardfile;
