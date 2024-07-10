import React from 'react';
import './latest.css';
import {
  fetchLatestPosts,
  } from '../../../../Service/HttpRequest/ApiService';
import Template from '../../../Ui/Postcard/Template';
import { useQuery } from '@tanstack/react-query';

const Latest = () => {

  
  // Fetch latest posts
  const { data: latestPosts = [], isError: latestPostsError, isLoading: latestPostsLoading } = useQuery({
    queryKey: ['latestPosts'],
    queryFn: fetchLatestPosts,
    
  });

  if (latestPostsLoading) {
    return <p>Loading...</p>;
  }

  if (latestPostsError) {
    return ( <p color='red'>Error fetching latest posts</p> );
  }


  return (
    <div className="maincontent">
      {latestPosts.map((post) => (
        <div key={post.id} className="post-row">
          <Template
            post={post}
          />
        </div>
      ))}
    </div>
  );
};

export default Latest;
