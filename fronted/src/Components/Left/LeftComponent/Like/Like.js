import React from 'react';
import './Like.css';
import { Paper } from "@mui/material";
import { deleteLikedPost, deleteSavedPost, fetchLikedPosts, fetchSavedPosts } from "../../../../Service/HttpRequest/ApiService";
import PostCardfile from "../../../Ui/Postcard/Postcardfile";
import { useQuery, useQueryClient } from '@tanstack/react-query';

const Like = () => {
  const queryClient = useQueryClient();

  // Fetch liked posts
  const { data: likedPosts = [], isLoading: isLoadingLiked, error: errorLiked } = useQuery({
    queryKey: ['likedPosts'],
    queryFn: fetchLikedPosts,
    staleTime: 20000,  // Data is fresh for 20 seconds
    cacheTime: 60000,  // Data is cached for 60 seconds
    refetchInterval: 20000,  // Refetch data every 20 seconds
  });

  // Fetch saved posts
  const { data: savedPosts = [], isLoading: isLoadingSaved, error: errorSaved } = useQuery({
    queryKey: ['savedPosts'],
    queryFn: fetchSavedPosts,
    staleTime: 20000,
    cacheTime: 60000,
    refetchInterval: 20000,
  });

  const handleDelete = async (postId) => {
    await deleteLikedPost(postId);
    queryClient.invalidateQueries(['likedPosts']);
  };

  const handleDeletesave = async (postId) => {
    const save = savedPosts.find((saves) => saves.belongstoposts.id === postId);
    if (save) {
      await deleteSavedPost(save.id);
      queryClient.invalidateQueries(['savedPosts']);
    }
  };

  const handleSavePost = async (postId) => {
    await savedPosts(postId);
    queryClient.invalidateQueries(['savedPosts']);
  };

  if (isLoadingLiked || isLoadingSaved) {
    return <div>Loading...</div>;
  }

  if (errorLiked || errorSaved) {
    return <div>Error loading posts</div>;
  }

  return (
    <div className="saved-container">
      <h2 align="center">Saved Posts</h2>
      <div className="post-row">
        {likedPosts.map((post, index) => (
          <PostCardfile
            key={post.belongstoposts.id}
            post={post}
            isLiked
            handleDelete={() => handleDelete(post.belongstoposts.id)}
            handleSavePost={() => handleSavePost(post.belongstoposts.id)}
            isSaved={savedPosts.some((saves) => saves.belongstoposts.id === post.belongstoposts.id)}
            handleDeletesave={() => handleDeletesave(post.belongstoposts.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Like;
