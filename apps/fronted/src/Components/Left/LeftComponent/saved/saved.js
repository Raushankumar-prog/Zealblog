import React, { useEffect, useState } from 'react';
import './saved.css';
import PostCardfile from '../../../Ui/Postcard/Postcardfile';
import { fetchSavedPosts, deleteSavedPost, fetchLikedPosts, deleteLikedPost, likePost } from '../../../../Service/HttpRequest/ApiService';
import Pagination from '../../../Ui/Pagination/Pagination';


import { Paper } from '@mui/material';

const Savedd = () => {
  const [savedPosts, setsavedPosts] = useState([]);
  const [likePosts, setlikePosts] = useState([]);
  const [showZeroSavedModal, setShowZeroSavedModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const savedPostsData = await fetchSavedPosts();
      setsavedPosts(savedPostsData);
    };

    fetchData();
  }, []);

  const handleDelete = async (postId) => {
    await deleteSavedPost(postId);
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
      const updatedLikedPosts = await fetchLikedPosts();
      setlikePosts(updatedLikedPosts);
    }
  };

  const handleLikePost = async (postId) => {
    await likePost(postId);
    const updatedLikedPosts = await fetchLikedPosts();
    setlikePosts(updatedLikedPosts);
  };

  const postsInRows = [];
  const postsPerRow = 2;

  for (let i = 0; i < savedPosts.length; i += postsPerRow) {
    const rowPosts = savedPosts.slice(i, i + postsPerRow);
    postsInRows.push(rowPosts);
  }

  useEffect(() => {
    setShowZeroSavedModal(savedPosts.length === 0);
  }, [savedPosts]);

  return (
    <div className="saved-container">
      <h2 align="center">Saved Posts</h2>

      {postsInRows.map((row, index) => (
        <div key={index} className="post-row">
          {row.map((post) => (
            <PostCardfile
              key={post.belongstoposts.id}
              post={ post}
              isSaved
              handleDelete={() => handleDelete(post.id)}
              handleLikePost={() => handleLikePost(post.belongstoposts.id)}
              isLiked={likePosts.some((likes) => likes.belongstoposts.id === post.belongstoposts.id)}
              handleDeletelike={() => handleDeletelike(post.belongstoposts.id)}
            />
          ))}
        </div>
      ))}
      
      {showZeroSavedModal && (
        <Paper className="zero-saved-modal">
          <div className="modal-content">
            <p id="savedcountmessage">Zero post is saved.</p>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default Savedd;
