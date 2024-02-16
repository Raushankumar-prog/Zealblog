// Popular.js
import React, { useEffect, useState } from 'react';
import './popular.css';
import PostCard from '../../../ui/postcard/postcard';
import { fetchPopularPosts, fetchSavedPosts, savePost, likePost, fetchLikedPosts,deleteSavedPost,deleteLikedPost } from '../../../services/httprequest/apiService';

const Popular = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [savedPosts, setsavedPosts] = useState([]);
  const [likePosts, setlikePosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularPostsData = await fetchPopularPosts();
      setPopularPosts(popularPostsData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const savedPostsData = await fetchSavedPosts();
      setsavedPosts(savedPostsData);
    };

    fetchData();
  }, []);

  const handleSavePost = async (postId) => {
    await savePost(postId);
   
  };

  const handleLikePost = async (postId) => {
    await likePost(postId);
   
  };
  
const handleDeletelike= async (likeId) => {
  console.log(likeId)
  await deleteLikedPost(likeId);
};

  useEffect(() => {
    const fetchData = async () => {
      const likedPostsData = await fetchLikedPosts();
      setlikePosts(likedPostsData);
    };

    fetchData();
  }, []);

  const handleDelete = async (postId) => {
    console.log(postId);
    await deleteSavedPost(postId);
   
  };
  return (
    <div>
      <h2>Popular Posts</h2>
      {popularPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isSaved={savedPosts.some((last) => last.belongstoposts.id === post.id)}
          handleSavePost={handleSavePost}
          handleLikePost={handleLikePost}
          isLiked={likePosts.some((likes) => likes.belongstoposts.id === post.id)}
            handleDelete={() => handleDelete(post.saving[0].id)}
             handleDeletelike={() => handleDeletelike(post.liked[0].id)}
        />
      ))}
    </div>
  );
};

export default Popular;
