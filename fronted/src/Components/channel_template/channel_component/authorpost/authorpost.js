import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../../fetch/fetch';
import { getRandomColor } from '../../../Glance/glance';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import Saved from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie';


const username=Cookies.get('usernam');

const AuthorPost = () => {
  const [profilePosts, setprofilePosts] = useState([]);

  useEffect(() => {
  

    const fetchData = async (id) => {
      try {
        // Make a request to fetch the latest posts
          const id=Cookies.get('id');
        console.log(id);
        const response = await makeRequest(`/api/profilePost/${id}`, 'GET');

         console.log(response);
    
        setprofilePosts(response.profilePosts);
      } catch (error) {
        console.error('Error fetching latest posts:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

const handleDelete = async (postId) => {
 
    try {
      const response = await makeRequest(`/api/deletepost/${postId}`, 'DELETE');
      console.log('Deleting post with ID:', postId);
      // After successful deletion, you may want to update the state or perform other actions
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  return (
    <div>
      <h2>Your Posts</h2>
      {profilePosts.map((post) => (
       <div className="universe1" key={post.id} >
                     <Paper className="papersClass" >
                          <Link to="/mainpage" className="remove">
                            <div className="space">
                                   <div className="headingglance"><p className="headingtext">{post.title}</p></div>
                               {/*<div className="glancecontent">*/}
                                          {/*<div className="glanceimage"><img src={post.imageUrl}></img></div>*/}
                                         <div className="glancebriefbox"><p className="glancebrieftext">{ post.content}</p></div>
                                  {/* </div>*/}
                                  
                            </div>
                              </Link>
                            <div className="little">
                                     <div className="author">   <div className="channelicon"><AccountCircleIcon fontSize="large" style={{ color: getRandomColor() }}/></div>
                                                                       <div className="profile">{post.beongsto ? post.beongsto.username : 'Unknown User'}</div>
                           </div>
                                     <div className="like"><DeleteIcon color="error" onClick={() => handleDelete(post.id)}/></div>
                                    
                            </div>
                              </Paper>
                   </div>
      ))}
    </div>
  );
}; 
                 

export default AuthorPost;
