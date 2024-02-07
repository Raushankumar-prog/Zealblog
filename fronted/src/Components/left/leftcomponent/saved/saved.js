// Saved.js
import React, { useEffect, useState } from 'react';
import './saved.css';
import PostCard from '../../../postcard/postcard';
import { fetchSavedPosts, deleteSavedPost, fetchLikedPosts } from '../../../services/apiService';

const Savedd = () => {
  const [savedPosts, setsavedPosts] = useState([]);
  const [likePosts, setlikePosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const savedPostsData = await fetchSavedPosts();
      setsavedPosts(savedPostsData);
    };

    fetchData();
  }, []);

  const handleDelete = async (postId) => {
    await deleteSavedPost(postId);
   
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
      <h2>Saved Posts</h2>
      {savedPosts.map((post) => (
        <PostCard
          key={post.belongstoposts.id}
          post={post.belongstoposts}
          isSaved
          handleDelete={() => handleDelete(post.id)}
          isLiked={likePosts.some((likes) => likes.belongstoposts.id === post.belongstoposts.id)}
        />
      ))}
    </div>
  );
};

export default Savedd;
