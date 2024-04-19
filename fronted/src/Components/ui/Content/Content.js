import { useEffect, useState } from "react";
import { getContent } from "../../../Service/HttpRequest/ApiGetContent";
import { useParams } from 'react-router-dom';
import './Content.css';
import { articleread } from "../../../Service/HttpRequest/ApiArticleRead";
import  {Link} from 'react-router-dom';
import { Button } from "@mui/material";

const Content = () => {
    const { postid } = useParams(); 
    const [content, setContent] = useState(null);
    const [textContent, setTextContent] = useState('');




useEffect(() => {
    const fetchData = async () => {
        try {
            console.log("what to read");
         await articleread(postid);
          
        } catch (error) {
            console.error('Error fetching content:', error.message);
        }
    };

    fetchData();

}, [postid]); 

    

    useEffect(() => {
        const fetchData = async () => {
            try {
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


    return (
        <>
            <div className="contenttitle">{content && content.title}</div>
            <div  className="contentprofile">
                <img src={content?.userImage} className="contentuserimage"/>
                <div className="contentusername">
                    <div className="contentprofileusernam">{content?.beongsto?.username}</div>
                    <div className="contentcreatedAt">{content?.createdAt}</div>
                   
            </div>
             <div className="summarywatched">
                <Link to={`/videoplayed/${content?.id}`} className="remove">
                <Button variant="contained">video summary</Button>
                </Link>
            </div>
                </div>
            <div className="contentmaincontent">{content?.content}</div>
            <div className="contentpageimagebox" ><img src={content?.imageUrl} className="contentpageimage"/></div>
            <div>
                <pre>{textContent}</pre>
            </div>
            <video src={content?.video}/>
        </>
    );
}

export default Content;
