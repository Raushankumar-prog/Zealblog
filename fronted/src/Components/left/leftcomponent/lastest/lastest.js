import React, { useEffect, useState } from 'react';
import './lastest.css';
import { makeRequest } from '../../../fetch/fetch';

const Lastest = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to fetch the latest posts
        const response = await makeRequest('/lastestpost', 'GET', {
            createdAt:12-23-23,
        });
console.log(response);
    
        setLatestPosts(response.latestPosts);
      } catch (error) {
        console.error('Error fetching latest posts:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Latest Posts</h2>
      {latestPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {/* Render other post details */}
          <img src={post.imageUrl} alt="Post Image" />
        </div>
      ))}
    </div>
  );
};

export default Lastest;
