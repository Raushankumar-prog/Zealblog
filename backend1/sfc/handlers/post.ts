import prisma from '../db';
import sharp from 'sharp';
import crypto from 'crypto';

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')


// creating the post
export const createPost = async (req, res) => {
    try {
        const imageName = generateFileName()

  const fileBuffer = await req.file.buffer

  //await uploadFile(fileBuffer, imageName, req.file.mimetype)
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                nichetype: req.body.nichetype,
                belongsid: req.body.id,

               imageName,
            
            }
        });
        res.status(200).json({ success: true, post });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

// updating the post
export const updatePost = async (req, res) => {
    try {
        const updatedPost = await prisma.post.update({
            where: {
                id: req.body.id,
            },
            data: {
                title: req.body.title,
                content: req.body.content,
                nichetype: req.body.nichetype,
                belongsid: req.body.belongsid,

            }
        });
        res.status(200).json({ success: true, updatedPost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

// updating the publish timing
export const publish = async (req, res) => {
    try {
        const publishedPost = await prisma.post.update({
            where: {
                id: req.body.id,
            },
            data: {
                published: req.body.publish,
                belongsid: req.body.belongsid,
            }
        });
        console.log('Published Post:', publishedPost);
        res.status(200).json({ success: true, publishedPost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

// deleting the post
export const deletePost = async (req, res) => {
    try {
       
        const deletedpost = await prisma.post.delete({
            where: {
                id: req.body.id,
                
            },
        });
       //   await deleteFile(deletedpost.imageName)

        res.status(200).json({ success: true, deletedpost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

export const latestPost = async (req, res) => {
    try {
        // Input validation
        if (!req.body.id) {
            return res.status(400).json({ success: false, error: 'Invalid input data' });
        }

        const latestPosts = await prisma.post.findMany({
            where: {
                id: req.body.id,
            },
            orderBy: {
                createdAt: 'desc',
            },
            select: {
                id: true,
                title: true,
                content: true,
                nichetype: true,
                belongsid: true,
                imageName: true,
                createdAt: true,
            },
        });

        // Generate image URLs and include them in the response
        // const postsWithImageUrls = await Promise.all(
        //     latestPosts.map(async (post) => {
        //         const imageUrl = await getObjectSignedUrl(post.imageName); // Use your S3 URL generation function
        //         return { ...post, imageUrl };
        //     })
        // );

        res.status(200).json({ latestPosts: latestPosts });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

export const popularPosts = async (req, res) => {
    try {
        const sortOrder = req.query.sortOrder || 'desc';

        // Input validation
        if (!req.body.id) {
            return res.status(400).json({ success: false, error: 'Invalid input data' });
        }

        const popularPosts = await prisma.post.findMany({
            where: {
                id: req.body.id,
            },
            orderBy: {
                like: sortOrder,
            },
            select: {
                id: true,
                title: true,
                content: true,
                nichetype: true,
                belongsid: true,
                imageName: true,
                createdAt: true,
            },
        });

        // // Generate image URLs and include them in the response
        // const postsWithImageUrls = await Promise.all(
        //     popularPosts.map(async (post) => {
        //         const imageUrl = await getObjectSignedUrl(post.imageName); // Use your S3 URL generation function
        //         return { ...post, imageUrl };
        //     })
        // );

        res.status(200).json({ popularPosts:popularPosts });
    } catch (error) {
         console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};