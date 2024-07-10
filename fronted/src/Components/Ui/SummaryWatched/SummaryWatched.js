import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { videowatchedbyyou } from "../../../Service/HttpRequest/ApiSummaryWatched";
import './video.css';
import { Card } from "@mui/material";


const fetchVideosWatched = async () => {
  const response = await videowatchedbyyou();
  return response?.videowatched;
};

const SummaryWatched = () => {

  const [videoLoaded, setVideoLoaded] = useState(false);


  const { data: videowatched, isLoading, error } = useQuery({
    queryKey: ["videowatched"],
    queryFn: fetchVideosWatched
  });

  const handleClick = () => {
    setVideoLoaded(true); // Load the video when clicked
  };

  if (isLoading) {
    return <div>..... loading</div>;
  }

  if (error) {
    return (
      <div>
        Error fetching latest posts: {error.message}
      </div>
    );
  }

  return (
    <div className="videotem">
      {videowatched ? (
        videowatched.map((data) => (
          <Card key={data.id}>
            <div className="videomk">
              <video
                controls
                className="videoto"
                onClick={handleClick}
                poster={data?.imageUrl}
                preload={videoLoaded ? "auto" : "none"}
              >
                <source src={data.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="videotitle">{data[0]?.belongstoposts?.title}</p>
            </div>
          </Card>
        ))
      ) : (
        <div>No videos watched</div>
      )}
    </div>
  );
};

export default SummaryWatched;
