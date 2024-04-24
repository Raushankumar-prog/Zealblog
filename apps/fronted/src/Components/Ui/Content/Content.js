import React, { useEffect, useState } from "react";
import { getContent } from "../../../Service/HttpRequest/ApiGetContent";
import { useParams } from 'react-router-dom';
import './Content.css';
import { articleread } from "../../../Service/HttpRequest/ApiArticleRead";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { fetchSubsciber, subscribing } from "../../../Service/HttpRequest/ApiSubscriber";
 



const Content = () => {
    const { postid } = useParams(); 
    const [content, setContent] = useState(null);
    const [textContent, setTextContent] = useState('');
    const [subscribed, setSubscribed] = useState(false);
  
      const [subscribedAuthors, setSubscribedAuthors] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
            
                await articleread(postid);
                const data = await getContent(postid);
                setContent(data);
            } catch (error) {
                console.error('Error fetching content:', error.message);
            }
        };

        fetchData();

    }, [postid]); 

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(content?.txtfile);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch content');
                }
                const data = await response.text();
                setTextContent(data);
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        };

        if (content?.txtfile) {
            fetchContent();
        }
    }, [content?.txtfile]);










    const handleFollow = async () => {
        try {
        
           const data= await subscribing(content?.beongsto?.id);
      
            setSubscribed(true);
        } catch (error) {
            console.error('Error subscribing:', error.message);
        }
    };




 useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSubsciber();
                setSubscribedAuthors(data);
                console.log(subscribedAuthors);
                data.subscriber.forEach(subscriber => {
                    if (subscriber?.subscribedId === content?.beongsto?.id) {
                        setSubscribed(true);
                        return; // Exit the loop once subscribed status is set
                    }
                });
            } catch (error) {
                console.error('Error fetching subscribers:', error.message);
            }
        };

        fetchData();

    }, [postid, content?.beongsto?.id]); 














    return (
        <>
            <div className="contenttitle">{content && content.title}</div>
            <div className="contentprofile">
                <img src={content?.userImage} className="contentuserimage"/>
                <div className="contentusername">
                    <div className="contentprofileusernam">{content?.beongsto?.username}</div>
                    <div className="contentcreatedAt">{content?.createdAt}</div>
                </div>
                <div className="summarywatched">
                    <Link to={`/videoplayed/${content?.id}`} className="remove">
                        <Button variant="contained">Video Summary</Button>
                    </Link>
                </div>
            </div>
            <Button variant="contained" style={{marginLeft:'8%'}} onClick={handleFollow} disabled={subscribed}>
                {subscribed ? 'Followed' : 'Follow'}
            </Button>
            <div className="contentmaincontent">{content?.content}</div>
            <div className="contentpageimagebox" ><img src={content?.imageUrl} className="contentpageimage"/></div>
            <div>
              <div className="contentmaincontent">{textContent}</div>  
            </div>
        </>
    );
}

export default Content;
