import { makeRequest } from "../Fetch/Fetch";

export const updatecountview = async (postid) => {
  try {
    const response = await makeRequest(`/api/updatelike/${postid}`, 'PUT');  // Ensure this endpoint matches the backend route
    return response;

  } catch (error) {
    console.error('Error fetching latest posts:', error.message);
    return [];
  }
}



export const updatecountviewby = async (postid) => {
  try {
    const response = await makeRequest(`/api/updatelikes/${postid}`, 'PUT');  // Ensure this endpoint matches the backend route
    return response;

  } catch (error) {
    console.error('Error fetching latest posts:', error.message);
    return [];
  }
}
