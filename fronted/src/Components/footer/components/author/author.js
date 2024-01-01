import React, { useEffect, useState } from 'react';

const Author = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('/api/getauthors'); 
        const data = await response.json();

        if (data.success) {
          setAuthors(data.authorsWithPostCount);
        } else {
          console.error('Error fetching authors:', data.error);
        }
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAuthors();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Authors with Post Count</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.username} - Post Count: {author.post.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Author;
