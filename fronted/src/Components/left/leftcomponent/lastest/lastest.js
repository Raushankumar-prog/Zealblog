import React, { useEffect, useState } from 'react';
import './lastest.css';
import { makeRequest } from '../../../fetch/fetch';
import { getRandomColor } from '../../../Glance/glance';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Liked from '@mui/icons-material/ThumbUpOffAlt';
import Bliked from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import Saved from '@mui/icons-material/BookmarkBorder';
import BSaved from '@mui/icons-material/Bookmark';
import Cookies from 'js-cookie';


const username=Cookies.get('usernam');
const Lastest = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [savedPosts, setsavedPosts] = useState([]); 
  const [likePosts,setlikePosts]=useState([]);

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
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to fetch popular posts
         const id=Cookies.get('id');
        const response = await makeRequest(`/api/savedpost/${id}`, 'GET');   
        console.log(response);
        setsavedPosts(response.saved || []); // Ensure 'saved' array exists in the response
      } catch (error) {
        console.error('Error fetching popular posts:', error.message);
      }
    };

    fetchData();
  }, []); 

const handleSavePost = async (postId) => {
  try {
    const id = Cookies.get('id');
    const data = { postid: postId, belongsid: id };
    
    // Make a request to save the post
    const response = await makeRequest('/api/savingpost', 'POST', data);
    console.log(response);
    // Handle the response or update the UI accordingly
  } catch (error) {
    console.error('Error saving the post:', error.message);
  }
};

 
const handleLikePost = async (postId) => {
  try {
    const id = Cookies.get('id');
    const data = { postid: postId, belongsid: id };
    
    // Make a request to save the post
    const response = await makeRequest('/api/likingpost', 'POST', data);
    console.log(response);
    // Handle the response or update the UI accordingly
  } catch (error) {
    console.error('Error saving the post:', error.message);
  }
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to fetch popular posts
         const id=Cookies.get('id');
        const response = await makeRequest(`/api/likedpost/${id}`, 'GET');   
        console.log(response);
        setlikePosts(response.liked || []); // Ensure 'saved' array exists in the response
      } catch (error) {
        console.error('Error fetching popular posts:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Latest Posts</h2>
      {latestPosts.map((post) => (
       <div className="universe" key={post.id} >
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
                                     <div className="like"> {likePosts.some((likes) => likes.belongstoposts.id === post.id) ? (
                                                     <Bliked />
                                                        ) : (<Liked style={{ color: getRandomColor() }} onClick={() => handleLikePost(post.id)} /> )}</div>
                                     <div className="comment"><CommentIcon  style={{ color: getRandomColor() }}/></div>
                                   <div className="comment">
                                                    {savedPosts.some((last) => last.belongstoposts.id === post.id) ? (
                                                     <BSaved />
                                                        ) : (
                                                    <Saved style={{ color: getRandomColor() }} onClick={() => handleSavePost(post.id)} />
                                                      )}
                                       </div>


                            </div>
                              </Paper>
                   </div>
      ))}
    </div>
  );
}; 
                 

export default Lastest;
