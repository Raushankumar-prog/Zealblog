import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../../../Service/Fetch/Fetch';
import { getRandomColor } from '../../../Glance/glance';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie';
import './AuthorPost.css'; 

const AuthorPost = ({ loggedInUserId }) => {

  const [profilePosts, setProfilePosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeRequest(`/api/profilePost/${loggedInUserId}`, 'GET');
        setProfilePosts(response.profilePosts);
      } catch (error) {
        console.error('Error fetching latest posts:', error.message);
      }
    };

    fetchData();
  }, [loggedInUserId]);

  const deleteuserpost = (postUserId) => loggedInUserId === postUserId;

  const handleDelete = async (postId) => {
    try {
      console.log('Deleting post with ID:', postId);
      await makeRequest(`/api/deletepost/${postId}`, 'DELETE');
      // After successful deletion, you may want to update the state or perform other actions
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  return (
    <div className="author-post-container">
      
      {profilePosts.map((post) => (
        <div className="post-item" key={post.id}>
          <Paper className="post-paper">
            <Link to="/mainpage" className="post-link">
              <div className="post-content">
                <div className="post-heading">
                  <p className="post-title">{post.title}</p>
                  <img src={post.imageUrl} alt="Post" className="post-image" />
                </div>
                <div className="post-description">
                  <p className="post-content-text">{post.content}</p>
                </div>
              </div>
            </Link>
            <div className="post-footer">
              <div className="author-info">
                <div className="author-image">
                  {post.userimage ? <img src={post.userimage} alt="User" className="author-image" /> : <AccountCircleIcon fontSize="large" />}
                </div>
                <div className="author-name">{post.beongsto ? post.beongsto.username : 'Unknown User'}</div>
              </div>
              {deleteuserpost(post.beongsto.id) && <div className="delete-icon"><DeleteIcon color="error" onClick={() => handleDelete(post.id)} /></div>}
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default AuthorPost;
