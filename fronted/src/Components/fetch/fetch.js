import Cookies from 'js-cookie';

const apiUrl = "http://localhost:4001";

export const makeRequest = async (endpoint, method, data = null) => {
  const url = new URL(endpoint, apiUrl);

  // Retrieve the 'token' value from cookies using js-cookie
  const token = Cookies.get('token');

  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  // If it's a FormData request,Content-Type should be'multipart/form-data'
  if (data instanceof FormData) {
    headers['Content-Type'] = 'multipart/form-data';
  } else {
    headers['Content-Type'] = 'application/json;charset=utf-8';
  }

  const requestOptions = {
    method,
    headers,
    // stringifing the data for non-GET and non-FormData requests
    ...(method !== 'GET' && !(data instanceof FormData) && { body: JSON.stringify(data) }),
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
