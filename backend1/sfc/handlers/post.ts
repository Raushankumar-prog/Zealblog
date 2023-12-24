import prisma from '../db';

// creating the post
export const createPost = async (req, res) => {
    try {
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                nichetype: req.body.nichetype,
                belongsid: req.body.id,
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
        res.status(200).json({ success: true, deletedpost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

// fetching the latest posts
export const latestPost = async (req, res) => {
    try {
        const latestPosts = await prisma.post.findMany({
            where: {
                id: req.body.id,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.status(200).json({ latestPosts });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};

// fetching popular posts
export const popularPosts = async (req, res) => {
    try {
        const sortOrder = req.query.sortOrder || 'desc'; 

        const popularPosts = await prisma.post.findMany({
            where: {
                id: req.body.id,
            },
            orderBy: {
                like: sortOrder,
            },
        });

        res.status(200).json({ popularPosts });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};
