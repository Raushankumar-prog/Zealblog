import { makeRequest } from "../Fetch/Fetch";
import Cookies from 'js-cookie';




export const articleread=async(postid)=>{
    try{
       const belongsid=Cookies.get('id');
       const formDataObject = {
         postid:postid,
        belongsid:belongsid,
      };
const response = await makeRequest('/api/articleread', 'POST', formDataObject);
    return response;
    }catch(error){
         console.error('Error fetching liked posts:', error.message);
          return [];
    }
}







export const articlereadbyyou=async()=>{
    try{
    const belongsid=Cookies.get('id');
    if(belongsid){
            const response = await makeRequest(`/api/articlereadbyyou/${belongsid}`, 'GET');
            return response;
    }
   
    }catch(error){
          console.error('Error fetching liked posts:', error.message);
          return [];
    }
}