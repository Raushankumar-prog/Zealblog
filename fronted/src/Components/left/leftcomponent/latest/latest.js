import React, { useEffect, useState } from 'react';
import './latest.css';
import { fetchLatestPosts, fetchSavedPosts, savePost, likePost, fetchLikedPosts, deleteSavedPost, deleteLikedPost } from '../../../../Service/HttpRequest/ApiService';
import Pagination from '../../../Ui/Pagination/Pagination';
import Template from '../../../Ui/Postcard/Template';

const Latest = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [savedPosts, setsavedPosts] = useState([]);
  const [likePosts, setlikePosts] = useState([]);

 const [pagenumber, setpagenumber] = useState(1);




  function previouspage() {
    setpagenumber((prevPage) => (prevPage !== 1 ? prevPage - 1 : prevPage));
  }
   

 function nextpage() {
    setpagenumber((prevPage) => ( prevPage + 1));
  }
useEffect(() => {
    const fetchData = async () => {
      try {
        
        const latestPostsData = await fetchLatestPosts(pagenumber );
        setLatestPosts(latestPostsData);
      
      } catch (error) {
        console.error('Error fetching latest posts:', error.message);
      } 
    };

    fetchData();
  }, [pagenumber]);




  
  useEffect(() => {
    const fetchData = async () => {
      const savedPostsData = await fetchSavedPosts();
      setsavedPosts(savedPostsData);
    };

    fetchData();
  }, []);

  const handleSavePost = async (postId) => {
    await savePost(postId);
    // Fetch updated saved posts after saving a post
    const updatedSavedPosts = await fetchSavedPosts();
    setsavedPosts(updatedSavedPosts);
  };

  const handleLikePost = async (postId) => {
    await likePost(postId);
    // Fetch updated liked posts after liking a post
    const updatedLikedPosts = await fetchLikedPosts();
    setlikePosts(updatedLikedPosts);
  };

  const handleDelete = async (postId) => {
    await deleteSavedPost(postId);
    // Fetch updated saved posts after deleting a saved post
    const updatedSavedPosts = await fetchSavedPosts();
    setsavedPosts(updatedSavedPosts);
  };

  const handleDeletelike = async (likeId) => {
    console.log(likeId);
    await deleteLikedPost(likeId);
    // Fetch updated liked posts after deleting a liked post
    const updatedLikedPosts = await fetchLikedPosts();
    setlikePosts(updatedLikedPosts);
  };

  useEffect(() => {
    const fetchData = async () => {
      const likedPostsData = await fetchLikedPosts();
      setlikePosts(likedPostsData);
    };

    fetchData();
  }, []);

  const postsInRows = [];
  const postsPerRow =3;

  for (let i = 0; i < latestPosts.length; i += postsPerRow) {
    const rowPosts = latestPosts.slice(i, i + postsPerRow);
    postsInRows.push(rowPosts);
  }

  return (
    <div className="maincontent">
      
      {postsInRows.map((row, index) => (
        <div key={index} className="post-row">
          {row.map((post) => (
            <Template
              key={post.id}
              post={post}
              isSaved={savedPosts.some((last) => last.belongstoposts.id === post.id)}
              handleSavePost={() => handleSavePost(post.id)}
              handleLikePost={() => handleLikePost(post.id)}
              isLiked={likePosts.some((likes) => likes.belongstoposts.id === post.id)}
              handleDelete={() => handleDelete(post.saving[0].id)}
              handleDeletelike={() => handleDeletelike(post.liked[0].id)}
            />
          ))}
        </div>
      ))}
      
      
      <Pagination  pagenumber={pagenumber} previouspage={previouspage} nextpage={nextpage} />
   
    </div>
  );
};

export default Latest;
