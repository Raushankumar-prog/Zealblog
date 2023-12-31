import React, { useEffect, useState } from 'react';
import './popular.css';
import { makeRequest } from '../../../fetch/fetch';
import { getRandomColor } from '../../../Glance/glance';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';

const Popular = () => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to fetch popular posts
        const response = await makeRequest('/api/popularpost', 'GET', {
          id: '',
        });

        
        setPopularPosts(response.popularPosts);
      } catch (error) {
        console.error('Error fetching popular posts:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Popular Posts</h2>
      {popularPosts.map((post) => (
       <div className="universe" key={post.id} >
                     <Paper >
                          <Link to="/mainpage" className="remove">
                            <div className="space">
                                   <div className="headingglance"><p className="headingtext">{post.title}</p></div>
                                  <div className="glancecontent">
                                        <div className="glanceimage"><img src={post.imageUrl}></img></div>
                                         <div className="glancebriefbox"><p className="glancebrieftext">{ post.content}</p></div>
                                   </div>
                            </div>
                              </Link>
                            <div className="little">
                                     <div className="author">   <div className="channelicon"><AccountCircleIcon fontSize="large" style={{ color: getRandomColor() }}/></div>
                                                                       <div className="profile">profile</div>
                           </div>
                                     <div className="like"><ThumbUpOffAltIcon style={{ color: getRandomColor() }}/></div>
                                     <div className="comment"><CommentIcon  style={{ color: getRandomColor() }}/></div>
                            </div>
                              </Paper>
                   </div>
    
      ))}
    </div>
  );
};

export default Popular;
