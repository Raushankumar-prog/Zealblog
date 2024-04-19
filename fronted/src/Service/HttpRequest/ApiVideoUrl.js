import { makeRequest } from "../Fetch/Fetch";


export const videourl=async(postid)=>{
    try{
    
    const response = await makeRequest(`/api/videourl/${postid}`, 'GET');
    return response;
    }catch(error){
          console.error('Error fetching liked posts:', error.message);
          return [];
    }
}