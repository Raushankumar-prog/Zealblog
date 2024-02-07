// Lastest.js
import React, { useEffect, useState } from 'react';
import './lastest.css';
import PostCard from '../../../postcard/postcard';
import { fetchLatestPosts, fetchSavedPosts, savePost, likePost, fetchLikedPosts } from '../../../services/apiService';

const Lastest = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [savedPosts, setsavedPosts] = useState([]);
  const [likePosts, setlikePosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const latestPostsData = await fetchLatestPosts();
      setLatestPosts(latestPostsData);
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

  useEffect(() => {
    const fetchData = async () => {
      const likedPostsData = await fetchLikedPosts();
      setlikePosts(likedPostsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Latest Posts</h2>
      {latestPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isSaved={savedPosts.some((last) => last.belongstoposts.id === post.id)}
          handleSavePost={handleSavePost}
          handleLikePost={handleLikePost}
          isLiked={likePosts.some((likes) => likes.belongstoposts.id === post.id)}
        />
      ))}
    </div>
  );
};

export default Lastest;
