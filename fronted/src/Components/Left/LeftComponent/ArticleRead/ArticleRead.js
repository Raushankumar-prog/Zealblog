import React from "react";
import { useQuery } from '@tanstack/react-query';
import { articlereadbyyou } from "../../../../Service/HttpRequest/ApiArticleRead";
import History from "../../../Ui/Postcard/History";
import './article.css';

const ArticleRead = () => {
  // Fetch articles read by the user
  const { data = { articleread: [] }, isLoading, error } = useQuery({
    queryKey: ['articlesReadByYou'],
    queryFn: articlereadbyyou,
   
  });

  // Extract the articles from the data
  const articles = data.articleread || [];

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle errors
  if (error) {
    return <div>Error fetching articles: {error.message}</div>;
  }

  return (
    <div className="post-s">
      {articles.map((article) => (
        <History key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleRead;
