// Saved.js
import React, { useEffect, useState } from 'react';
import './saved.css';
import PostCard from '../../../ui/postcard/postcard';
import { fetchSavedPosts, deleteSavedPost, fetchLikedPosts, deleteLikedPost, likePost } from '../../../services/httprequest/apiService';

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
    // Fetch updated saved posts after deleting a saved post
    const updatedSavedPosts = await fetchSavedPosts();
    setsavedPosts(updatedSavedPosts);
  };

  useEffect(() => {
    const fetchData = async () => {
      const likedPostsData = await fetchLikedPosts();
      setlikePosts(likedPostsData);
    };

    fetchData();
  }, []);

  const handleDeletelike = async (postId) => {
    const like = likePosts.find((likes) => likes.belongstoposts.id === postId);
    if (like) {
      await deleteLikedPost(like.id);
      // Fetch updated liked posts after deleting a liked post
      const updatedLikedPosts = await fetchLikedPosts();
      setlikePosts(updatedLikedPosts);
    }
  };

  const handleLikePost = async (postId) => {
    await likePost(postId);
    // Fetch updated liked posts after liking a post
    const updatedLikedPosts = await fetchLikedPosts();
    setlikePosts(updatedLikedPosts);
  };

  const postsInRows = [];
  const postsPerRow = 2;

  for (let i = 0; i < savedPosts.length; i += postsPerRow) {
    const rowPosts = savedPosts.slice(i, i + postsPerRow);
    postsInRows.push(rowPosts);
  }

  return (
    <div>
      <h2>Saved Posts</h2>

      {postsInRows.map((row, index) => (
        <div key={index} className="post-row">
          {row.map((post) => (
            <PostCard
              key={post.belongstoposts.id}
              post={post.belongstoposts}
              isSaved
              handleDelete={() => handleDelete(post.id)}
              handleLikePost={() => handleLikePost(post.belongstoposts.id)}
              isLiked={likePosts.some((likes) => likes.belongstoposts.id === post.belongstoposts.id)}
              handleDeletelike={() => handleDeletelike(post.belongstoposts.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Savedd;
