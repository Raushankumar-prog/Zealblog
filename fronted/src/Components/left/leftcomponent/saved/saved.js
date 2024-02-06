import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../../fetch/fetch';
import { getRandomColor } from '../../../Glance/glance';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import Saved from '@mui/icons-material/Bookmark';
import Cookies from 'js-cookie';

const Savedd = () => {
  const [popularPosts, setPopularPosts] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to fetch popular posts
         const id=Cookies.get('id');
        const response = await makeRequest(`/api/savedpost/${id}`, 'GET');   
        
        setPopularPosts(response.saved || []); // Ensure 'saved' array exists in the response
      } catch (error) {
        console.error('Error fetching popular posts:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

const handleDelete = async (id) => {
 
    try {
      const response = await makeRequest(`/api/deletingsavedpost/${id}`, 'DELETE');
      
     
      // After successful deletion, you may want to update the state or perform other actions
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  return (
    <div>
      <h2>Saved Posts</h2>
      {popularPosts?.map((post) => (
        <div className="universe" key={post.belongstoposts.id}>
          <Paper className="papersClass">
            <Link to="/mainpage" className="remove">
              <div className="space">
                <div className="headingglance">
                  <p className="headingtext">{post.belongstoposts.title}</p>
                </div>
                <div className="glancebriefbox">
                  <p className="glancebrieftext">{post.belongstoposts.content}</p>
                </div>
              </div>
            </Link>
            <div className="little">
              <div className="author">
                <div className="channelicon">
                  <AccountCircleIcon fontSize="large" style={{ color: getRandomColor() }} />
                </div>
                <div className="profile">
                  {post.belongstoposts.beongsto ? post.belongstoposts.beongsto.username : 'Unknown User'}
                </div>
              </div>
              <div className="like">
                <ThumbUpOffAltIcon style={{ color: getRandomColor() }} />
              </div>
              <div className="comment">
                <CommentIcon style={{ color: getRandomColor() }} />
              </div>
              <div className="comment">
                <Saved style={{ color: getRandomColor() }} onClick={() => handleDelete(post.id)} />
              </div>
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default Savedd;
