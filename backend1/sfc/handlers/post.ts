import prisma from '../db';
//import sharp from 'sharp';
import crypto from 'crypto';
import { uploadFile, getObjectSignedUrl, deleteFile } from './s3';

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

export const createPost = async (req, res) => {
    try {
       
        const imageName = generateFileName();
        const fileBuffer = await  req.file.buffer;

         await uploadFile(fileBuffer, imageName, req.file.mimetype);

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
        res.status(500).json({ success: false, error: 'Internal Server Error' });
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
        await deleteFile(deletedpost.imageName)

        res.status(200).json({ success: true, deletedpost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};const generateImageUrls = async (posts) => {
    return Promise.all(
        posts.map(async (post) => {
            const imageUrl = await getObjectSignedUrl(post.imageName);
            return { ...post, imageUrl };
        })
    );
};

export const latestPost = async (req, res) => {
    try {
        const latestPosts = await prisma.post.findMany({
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

        const postsWithImageUrls = await generateImageUrls(latestPosts);

        res.status(200).json({ latestPosts: postsWithImageUrls });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

export const popularPosts = async (req, res) => {
    try {
        const sortOrder = req.query.sortOrder || 'desc';

        const popularPosts = await prisma.post.findMany({
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
                
                like: true, 
            },
        });

        const postsWithImageUrls = await generateImageUrls(popularPosts);

        res.status(200).json({ popularPosts: postsWithImageUrls });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};
