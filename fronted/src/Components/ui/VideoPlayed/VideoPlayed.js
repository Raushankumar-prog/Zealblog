import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videourl } from "../../../Service/HttpRequest/ApiVideoUrl";
import { videowatched } from "../../../Service/HttpRequest/ApiSummaryWatched";

const Videoplayed = () => {
  const { postid } = useParams();
  const [url, setUrl] = useState();



  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const data = await videourl(postid);
        setUrl(data);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, [postid]);



  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const data = await videowatched(postid);
        setUrl(data);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, [postid]);



  return (
    <>
      <video controls autoPlay height="550px" width="1200px">
        <source src={url?.videoName} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Videoplayed;
