import { useEffect, useState } from "react";
import { videowatchedbyyou } from "../../../Service/HttpRequest/ApiSummaryWatched";

const SummaryWatched = () => {
  const [videowatched, setvideowatched] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestPostsData = await videowatchedbyyou();
        setvideowatched(latestPostsData?.videowatched);
        console.log(videowatched);
      } catch (error) {
        console.error('Error fetching latest posts:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {videowatched.map((data) => (
        <video controls autoPlay height="550px" width="1200px" key={data.id}>
          <source src={data.videoUrl} type="video/mp4" />
          {console.log(data?.videoUrl)} 
        </video>
      ))}
    </>
  );
}

export default SummaryWatched;
