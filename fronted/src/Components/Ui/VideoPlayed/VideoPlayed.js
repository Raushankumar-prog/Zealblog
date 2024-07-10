import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { videourl } from "../../../Service/HttpRequest/ApiVideoUrl";
import { videowatched } from "../../../Service/HttpRequest/ApiSummaryWatched";
import './vi.css';
import { Paper } from "@mui/material";
import ViTemplate from "../Postcard/vitemplate";
import Cookies from 'js-cookie';
import { updatecountviewby } from "../../../Service/HttpRequest/ApiUpdateLike";

const Videoplayed = () => {
  const { postid } = useParams();
  const [videoLoaded, setVideoLoaded] = useState(false);





    useEffect(() => {
    const timer = setTimeout(async () => {
      await updatecountviewby(postid);  // Call the request function and wait for it to complete
    }, 60000);  

    // Cleanup function to clear the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []);



 
  const { data: url, error, isLoading } = useQuery({
    queryKey: ['videoUrl', postid],
    queryFn: () => videourl(postid),
  });

  useQuery({
    queryKey: ['videoWatched', postid],
    queryFn: async () => {
      const belongsid = Cookies.get('id');
      if (belongsid) {
        return videowatched(postid);
      }
    },
    enabled: !!Cookies.get('id') 
  });

  const handleClick = () => {
    setVideoLoaded(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching video URL</div>;

  return (
    <>
      <Paper>
        {url && url.videoUrl ? (
          <>
            <div className="VIR">
              <video
                controls
                onClick={handleClick}
                poster={url?.imageUrl}
                className="videowid"
                preload={videoLoaded ? "auto" : "none"}
              >
                <source src={url.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <ViTemplate post={url} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Paper>
    </>
  );
};

export default Videoplayed;
