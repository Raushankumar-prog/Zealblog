import React, { useEffect, useState } from "react";
import { getContent } from "../../../Service/HttpRequest/ApiGetContent";
import { useParams } from 'react-router-dom';
import './Content.css';
import { articleread } from "../../../Service/HttpRequest/ApiArticleRead";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { fetchSubsciber, subscribing } from "../../../Service/HttpRequest/ApiSubscriber";
import Cookies from 'js-cookie';
import { updatecountview, updatecountviewby } from "../../../Service/HttpRequest/ApiUpdateLike";
import SEO from "../../../Service/Seo";
import { Helmet } from "react-helmet";

const Content = () => {
    const { postid } = useParams(); 
    const [content, setContent] = useState(null);
    const [textContent, setTextContent] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const belongsid = Cookies.get('id');



    useEffect(() => {
        const timer = setTimeout(async () => {
            await updatecountviewby(postid);
        }, 60000);
        return () => clearTimeout(timer);
    }, [postid]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                await updatecountview(postid);
                if (belongsid) {
                    await articleread(postid);
                }
                const data = await getContent(postid);
                setContent(data);
            } catch (error) {
                console.error('Error fetching content:', error.message);
            }
        };
        fetchData();
    }, [postid, belongsid]);




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
           
                 await subscribing(content?.beongsto?.id).then(setSubscribed(true));
            
        } catch (error) {
            console.error('Error subscribing:', error.message);
        }
    };




    useEffect(() => {
        const fetchData = async () => {
            try {
                if (belongsid) {
                    const data = await fetchSubsciber();
                  
                    data.subscriber.forEach(subscriber => {
                        if (subscriber?.subscribedId === content?.beongsto?.id) {
                            setSubscribed(true);
                            return;
                        }
                    });
                }
            } catch (error) {
                console.error('Error fetching subscribers:', error.message);
            }
        };
        fetchData();
    }, [postid, content?.beongsto?.id, belongsid]);



    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": content?.title,
        "description": content?.textContent,
        "image": content?.imageUrl,
        "url": `http://localhost:3000/content/${postid}`,
        "author": {
            "@type": "Person",
            "name": content?.beongsto?.username,
            "image": content?.userImage
        },
        "datePublished": content?.createdAt,
    };



    return (
        <>
            <SEO
                title={content?.title}
                description={content?.textContent}
                keywords={content?.textContent}
                image={content?.imageUrl}
                url={`http://localhost:3000/content/${postid}`}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>





            
            <h1 className="contenttitle">{content?.title}</h1>


            <div className="contentprofile">
                <img src={content?.userImage} className="contentuserimage" alt="User"/>
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
            <Button variant="contained" style={{ marginLeft: '8%' }} onClick={handleFollow} disabled={subscribed}>
                {subscribed ? 'Followed' : 'Follow'}
            </Button>
            <div>
             
                 <div className="html-content" dangerouslySetInnerHTML={{ __html: textContent }} />
            </div>
        </>
    );
}

export default Content;
