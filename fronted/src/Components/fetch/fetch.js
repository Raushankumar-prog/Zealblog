const apiUrl = "http://localhost:4001";

const makeRequest = async (endpoint, method, data = null) => {
  const url = new URL(endpoint, apiUrl); // Use URL constructor for more reliable URL construction
  
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  const requestOptions = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorResponse = await response.json(); // Attempt to parse error response
      throw new Error(`Request failed with status ${response.status}: ${errorResponse.message}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error making API request:", error.message);
    throw error;
  }
};
