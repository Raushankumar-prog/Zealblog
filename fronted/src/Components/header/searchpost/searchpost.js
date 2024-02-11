
import * as React from 'react';
import { useState,useEffect,createContext, useContext } from 'react';
import PostCard from "../../postcard/postcard";
import { fetchSavedPosts, savePost, likePost, fetchLikedPosts,deleteSavedPost, deleteLikedPost, handleSearch} from '../../services/apiService';
import { SearchContext } from '../header';

const Searchpost = () => {
     const { query } = useContext(SearchContext); // Consume the context
      
  const [SearchPosts, setSearchPosts] = useState([]);
  const [savedPosts, setsavedPosts] = useState([]);
  const [likePosts, setlikePosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const latestPostsData = await handleSearch(query);
      setSearchPosts(latestPostsData);
    };

    fetchData();
  }, [query]);

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

  const handleDelete = async (postId) => {
    
    await deleteSavedPost(postId);
   
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
  return (
    <div>
        {SearchPosts.map((post) => (
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

export default Searchpost;
