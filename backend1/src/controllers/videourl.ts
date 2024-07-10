import { getObjectURL } from "../aws/fileupload";
import prisma from "../db";
import client from '../cache'; // Assuming you have a Redis client setup file

export const videourl = async (req, res) => {
  const postId = req.params.postid;
  const cacheKey = `video:${postId}`;

  try {
    // Check if the video data is in the Redis cache
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      // If cached data exists, parse it and send it as the response
      const videoData = JSON.parse(cachedData);
      return res.status(200).json({ success: true, ...videoData });
    }

    // Fetch data from the database if not cached
    const video = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      select: {
        videoName: true,
        imageName: true,
        title: true,
        beongsto: {
          select: {
            username: true,
            profession: true,
            image: true,
          },
        },
      },
    });

    if (!video) {
      return res.status(404).json({ success: false, error: 'Video not found' });
    }

    // Get the URLs for video, image, and user image
    const videoUrl = await getObjectURL(`upload/image/${video.videoName}`);
    const imageUrl = await getObjectURL(`upload/image/${video.imageName}`);
    const userImage = await getObjectURL(`upload/image/${video.beongsto.image}`);

    // Prepare the data to be cached
    const videoData = { videoUrl, imageUrl, userImage, ...video };

    // Cache the data in Redis with a timeout (e.g., 1 hour = 3600 seconds)
    await client.set(cacheKey, JSON.stringify(videoData), { EX: 3600 });

    // Send the response
    res.status(200).json({ success: true, ...videoData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
};
