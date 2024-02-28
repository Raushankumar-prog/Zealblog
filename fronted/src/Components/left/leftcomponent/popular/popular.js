import React, { useEffect, useState } from 'react';
import './popular.css';
import PostCard from '../../../ui/postcard/postcard';
import { fetchPopularPosts, fetchSavedPosts, savePost, likePost, fetchLikedPosts, deleteSavedPost, deleteLikedPost } from '../../../services/httprequest/apiService';

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

  const handleDelete = async (postId) => {
    console.log(postId);
    await deleteSavedPost(postId);
    // Fetch updated saved posts after deleting a saved post
    const updatedSavedPosts = await fetchSavedPosts();
    setsavedPosts(updatedSavedPosts);
  };

  const postsInRows = [];
  const postsPerRow = 2;

  for (let i = 0; i < popularPosts.length; i += postsPerRow) {
    const rowPosts = popularPosts.slice(i, i + postsPerRow);
    postsInRows.push(rowPosts);
  }

  return (
    <div>
      <h2>Popular Posts</h2>
      {postsInRows.map((row, index) => (
        <div key={index} className="post-row">
          {row.map((post) => (
            <PostCard
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
    </div>
  );
};

export default Popular;
