import { makeRequest } from "../Fetch/Fetch";


export const getContent=async(postid)=>{
  try{
    const response = await makeRequest(`/api/getcontent/${postid}`, 'GET');
    return response;

  }catch(error){

    console.error('Error fetching latest posts:', error.message);
    return []
  }
}
