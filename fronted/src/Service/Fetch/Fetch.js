import Cookies from 'js-cookie';

const apiUrl = process.env.REACT_APP_API_URL;

export const makeRequest = async (endpoint, method, data = null) => {
  const url = new URL(endpoint, apiUrl);


  const headers = {
    'Authorization': `Bearer ${token}`,
   
    'Content-Type':'application/json'
  
  };

  
  const requestOptions = {
    method,
    headers,
     credentials: 'include',  
   
    ...(method !== 'GET'&& method !== 'DELETE' && method !=='PUT' && !(data instanceof FormData) && { body: JSON.stringify(data) }),
    
  };
  
  
  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Request failed with status ${response.status}: ${errorResponse.message}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error making API request:", error.message);
    throw error;
  }
};