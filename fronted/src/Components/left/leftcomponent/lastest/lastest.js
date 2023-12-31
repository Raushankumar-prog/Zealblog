import React, { useEffect, useState } from 'react';
import './lastest.css';
import { makeRequest } from '../../../fetch/fetch';
import { getRandomColor } from '../../../Glance/glance';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
const Lastest = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to fetch the latest posts
        const response = await makeRequest('/api/lastestpost', 'GET');
console.log(response);
    
        setLatestPosts(response.latestPosts);
      } catch (error) {
        console.error('Error fetching latest posts:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Latest Posts</h2>
      {latestPosts.map((post) => (
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
                 

export default Lastest;
