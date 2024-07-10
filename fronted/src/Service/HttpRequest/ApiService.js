// apiService.js
import { makeRequest } from '../Fetch/Fetch';
import Cookies from 'js-cookie';

export const fetchLatestPosts = async (pagenumber) => {
  try {
    
    const response = await makeRequest(`/api/lastestpost`, 'GET');

    const latestPosts = response.latestPosts.map(post => {
     return {
        ...post
      };
    });
    return latestPosts;
  } catch (error) {
    console.error('Error fetching latest posts:', error.message);
    return [];
  }
};


export const profilepost=async(providedId)=>{
  try{
    
    const response = await makeRequest(`/api/getprofile/${providedId}`, 'GET');
    return response;
  }catch(error){
    console.error('Error fetching latest posts:', error.message);
    return []
  }
}

export const fetchPopularPosts = async (pagenumber) => {
  try {
     
    const response = await makeRequest("/api/popularpost", 'GET');
   
      const popularPosts= response.popularPosts.map(post => {
      return {
        ...post,
      };
    });
    return popularPosts;

  } catch (error) {
    console.error('Error fetching popular posts:', error.message);
    return [];
  }
};

export const fetchSavedPosts = async (pagenumber) => {
  try {
    const id = Cookies.get('id');
    const response = await makeRequest(`/api/savedpost/${id}`, 'GET');
    return response.saved || [];
  } catch (error) {
    console.error('Error fetching saved posts:', error.message);
    return [];
  }
};

export const savePost = async (postId) => {
  try {
    const id = Cookies.get('id');
    const data = { postid: postId, belongsid: id };
    const response = await makeRequest('/api/savingpost', 'POST', data);
    console.log(response);
  } catch (error) {
    console.error('Error saving the post:', error.message);
  }
};

export const likePost = async (postId) => {
  try {
    const id = Cookies.get('id');
    const data = { postid: postId, belongsid: id };
    const response = await makeRequest('/api/likingpost', 'POST', data);
    console.log(response);
  } catch (error) {
    console.error('Error liking the post:', error.message);
  }
};

export const fetchLikedPosts = async () => {
  try {
    const id = Cookies.get('id');
    const response = await makeRequest(`/api/likedpost/${id}`, 'GET');
    return response.liked || [];
  } catch (error) {
    console.error('Error fetching liked posts:', error.message);
    return [];
  }
};

export const deleteSavedPost = async (postId) => {
  try {
    const response = await makeRequest(`/api/deletingsavedpost/${postId}`, 'DELETE');
    console.log(response);
  } catch (error) {
    console.error('Error deleting saved post:', error.message);
  }
};



export const deleteLikedPost = async (likeId) => {
  try {
    const response = await makeRequest(`/api/deletinglikedpost/${likeId}`, 'DELETE');
    console.log(response);
  } catch (error) {
    console.error('Error deleting saved post:', error.message);
  }
};
