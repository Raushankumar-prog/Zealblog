import React from 'react';
import './popular.css';
import { useQuery } from '@tanstack/react-query';
import {
  fetchPopularPosts,
} from '../../../../Service/HttpRequest/ApiService';
import Template from '../../../Ui/Postcard/Template';

const Popular = () => {
  // Fetch popular posts
  const { data: popularPosts = [], isLoading: isLoadingPopular, error: errorPopular } = useQuery({
    queryKey: ['popularPosts'],
    queryFn: fetchPopularPosts,
  });


  // Handle loading states
  if (isLoadingPopular) {
    return <div>Loading...</div>;
  }

  // Handle errors
  if (errorPopular) return <div>Error fetching popular posts: {errorPopular.message}</div>;
 

  return (
    <div className="maincontent">
      {popularPosts.map((post) => (
        <div key={post.id} className="post-row">
          <Template
            key={post.id}
            post={post}
          
          />
        </div>
      ))}
    </div>
  );
};

export default Popular;
