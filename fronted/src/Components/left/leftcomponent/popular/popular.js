import React, { useEffect, useState } from 'react';
import './popular.css';
import { makeRequest } from '../../../fetch/fetch';

const Popular = () => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to fetch popular posts
        const response = await makeRequest('/popularpost', 'GET', {
          id: '',
        });

        
        setPopularPosts(response.popularPosts);
      } catch (error) {
        console.error('Error fetching popular posts:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Popular Posts</h2>
      {popularPosts.map((post) => (
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

export default Popular;
