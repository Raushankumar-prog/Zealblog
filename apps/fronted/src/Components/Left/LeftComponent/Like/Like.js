
import './Like.css';
import { useState,useEffect } from "react";
import { Paper } from "@mui/material";
import { deleteLikedPost, deleteSavedPost, fetchLikedPosts, fetchSavedPosts } from "../../../../Service/HttpRequest/ApiService";
import PostCardfile from "../../../Ui/Postcard/Postcardfile";

const Like = () => {
  const [savedPosts, setsavedPosts] = useState([]);
  const [likePosts, setlikePosts] = useState([]);
  


  
  useEffect(() => {
    const fetchData = async () => {
      const likedPostsData = await fetchLikedPosts();
      setlikePosts(likedPostsData);
    };

    fetchData();
  }, []);


  
  const handleDelete = async (postId) => {
    await deleteLikedPost(postId);
    const updatedSavedPosts = await fetchLikedPosts();
    setlikePosts(updatedSavedPosts);
  };

  
  const handleDeletesave = async (postId) => {
    const save = savedPosts.find((saves) => saves.belongstoposts.id === postId);
    if (save) {
      await deleteSavedPost(save.id);
      const updatedSavedPosts = await fetchSavedPosts();
      setsavedPosts(updatedSavedPosts);
    }
  };

  
  const handleSavePost = async (postId) => {
    await savedPosts(postId);
    const updatedLikedPosts = await fetchSavedPosts();
    setsavedPosts(updatedLikedPosts);
  };


    return ( 
        <>
              <div className="saved-container">
      <h2 align="center">Saved Posts</h2>

      <div className="post-row">
  {likePosts.map((post, index) => (
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
        
        
        </>
     );
}
 
export default Like;