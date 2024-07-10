import { getObjectURL } from "../aws/fileupload";
import prisma from "../db";
import client from '../cache'; // Import the Redis client

export const getcontent = async (req, res) => {
    try {
        const postId = req.params.postid;
        const cacheKey = `post:${postId}`; // Define a cache key for the specific post

        // Check if the post data is in the Redis cache
        const cachedContent = await client.get(cacheKey);

        if (cachedContent) {
            // If cached data exists, parse it and send it as the response
            const maincontent = JSON.parse(cachedContent);
            return res.status(200).json(maincontent);
        }

        // Fetch data from the database if no cache
        const maincontent = await prisma.post.findUnique({
            where: {
                id: postId,
            },
            select: {
                id: true,
                title: true,
                imageName: true,
                content: true,
                txtName: true,
                videoName: true,
                createdAt: true,
                beongsto: {
                    select: {
                        username: true,
                        image: true,
                        id: true,
                    },
                },
            },
        });

        if (!maincontent) {
            // Handle case where no post is found
            return res.status(404).json({ error: 'Post not found' });
        }

        // Generate URLs for images, video, and text file
        const imageUrl = await getObjectURL(`upload/image/${maincontent.imageName}`);
        const userImage = await getObjectURL(`upload/image/${maincontent.beongsto.image}`);
        const video = await getObjectURL(`upload/image/${maincontent.videoName}`);
        const txtfile = await getObjectURL(`upload/image/${maincontent.txtName}`);

        const responseData = {
            ...maincontent,
            imageUrl,
            userImage,
            video,
            txtfile,
        };

        // Save the fetched data to the Redis cache with a timeout of 1 hour (3600 seconds)
        await client.set(cacheKey, JSON.stringify(responseData), { EX: 3600 });

        // Send the response
        res.status(200).json(responseData);

    } catch (error) {
        console.error('Error fetching post content:', error.message);

        // Ensure we don't send a response if one has already been sent
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
