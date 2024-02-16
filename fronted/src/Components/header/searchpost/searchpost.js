// // searchpost.js

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import PostCard from "../../postcard/postcard";
// import { fetchSavedPosts, savePost, likePost, fetchLikedPosts, deleteSavedPost, deleteLikedPost } from '../../services/apiService';

// const Searchpost = ({ searchPosts }) => {
//   const [savedPosts, setsavedPosts] = useState([]);
//   const [likePosts, setlikePosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const savedPostsData = await fetchSavedPosts();
//       setsavedPosts(savedPostsData);
//     };

//     fetchData();
//   }, []);

//   const handleSavePost = async (postId) => {
//     await savePost(postId);
//   };

//   const handleLikePost = async (postId) => {
//     await likePost(postId);
//   };

//   const handleDelete = async (postId) => {
//     await deleteSavedPost(postId);
//   };

//   const handleDeletelike = async (likeId) => {
//     console.log(likeId);
//     await deleteLikedPost(likeId);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const likedPostsData = await fetchLikedPosts();
//       setlikePosts(likedPostsData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {searchPosts.map((post) => (
//         <PostCard
//           key={post.id}
//           post={post}
//           isSaved={savedPosts.some((last) => last.belongstoposts.id === post.id)}
//           handleSavePost={() => handleSavePost(post.id)}
//           handleLikePost={() => handleLikePost(post.id)}
//           isLiked={likePosts.some((likes) => likes.belongstoposts.id === post.id)}
//           handleDelete={() => handleDelete(post.saving[0].id)}
//           handleDeletelike={() => handleDeletelike(post.liked[0].id)}
//         />
//       ))}
//     </div>
//   );
// };

// Searchpost.propTypes = {
//   searchPosts: PropTypes.array.isRequired,
// };

// export default Searchpost;
