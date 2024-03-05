import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../../services/fetch/fetch';
import { getRandomColor } from '../../../Glance/glance';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie';

const AuthorPost = (props) => {
  const { userId } = props;
  const [profilePosts, setProfilePosts] = useState([]);
  const loggedInUserId = Cookies.get('id');
  
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
  }, [userId, loggedInUserId]);

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
    <div>
      <h2>Your Posts</h2>
      {profilePosts.map((post) => (
        <div className="universe1" key={post.id}>
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
              {deleteuserpost(post.beongsto.id) && <div className="like"><DeleteIcon color="error" onClick={() => handleDelete(post.id)} /></div>}
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default AuthorPost;
