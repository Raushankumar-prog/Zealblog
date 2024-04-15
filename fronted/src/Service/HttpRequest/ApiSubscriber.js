import { makeRequest } from "../Fetch/Fetch";
import Cookies from 'js-cookie';

export const subscribing=async( subscribedId)=>{
    try{
       const subscriberId=Cookies.id('id');
       const formDataObject = {
        subscribedId: subscribedId,
        subscriberId:subscriberId,
      };
const response = await makeRequest('/api/subscribing', 'POST', formDataObject);
    return response;
    }catch(error){
         console.error('Error fetching liked posts:', error.message);
          return [];
    }
}


// export const fetchSubsciber = async () => {
//   try {
//    const ProfileId=Cookies.get('id');
//     const response = await makeRequest(`/api/gettingsubscriber/${ProfileId}`, 'GET');
//     return response || [];
//   } catch (error) {
//     console.error('Error fetching liked posts:', error.message);
//     return [];
//   }
// };
export const fetchSubsciber = async () => {
  try {
    const ProfileId = Cookies.get('id');
    const response = await makeRequest(`/api/gettingsubscriber/${ProfileId}`, 'GET');
    return response || []; // Return an empty array if response is falsy (null, undefined, etc.)
  } catch (error) {
    console.error('Error fetching subscriber data:', error.message);
    return []; // Return an empty array in case of error
  }
};



export const deleteSubscriber = async (ProfileId) => {
  try {
    const response = await makeRequest(`/api/unsubscribe/${ProfileId}`, 'DELETE');
    console.log(response);
  } catch (error) {
    console.error('Error deleting saved post:', error.message);
  }
};
