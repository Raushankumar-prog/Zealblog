
import React, { useState, useEffect } from "react";
import { articlereadbyyou } from "../../../../Service/HttpRequest/ApiArticleRead";
import History from "../../../Ui/Postcard/History";

const ArticleRead = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestPostsData = await articlereadbyyou();
        setArticles(latestPostsData.articleread);
      } catch (error) {
        console.error('Error fetching latest posts:', error.message);
      }
    };

    fetchData();
  }, []);





  const postsPerRow = 3;

  
  const articlesInRows = [];
  for (let i = 0; i < articles.length; i += postsPerRow) {
    const rowArticles = articles.slice(i, i + postsPerRow);
    articlesInRows.push(rowArticles);
  }




  return (
    <>
      {articlesInRows.map((rowArticles, rowIndex) => (
        <div key={rowIndex} className="post-row">
          {rowArticles.map((article, columnIndex) => (
           
              <History article={article} />
      
          ))}
        </div>
      ))}
    </>
  );
};

export default ArticleRead;
