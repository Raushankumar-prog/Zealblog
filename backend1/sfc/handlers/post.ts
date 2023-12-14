import prisma from '../db';

// creating the post
export const createPost = async (req, res) => {
    try {
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                nichetype: req.body.nichetype,
                 belongsid: req.body.belongsid 
              
            
            }
        });
        res.status(200).json({ success: true, post });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// updating the post
export const updatePost = async (req, res) => {
    try {
        const updatedPost = await prisma.post.update({
            
            where: {
                id: 4,
            },
            data: {
                title:"the title",
                content: "i don't know what is content",
                nichetype: "technolof",
                 belongsid: "1c918eb2-43ec-40dd-a639-f6114243c0c9",
            }
        });
        res.status(200).json({ success: true, updatedPost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// updating the publish timing
export const publish = async (req, res) => {
    try {
        const publishedPost = await prisma.post.update({
            where: {
                id: req.body.id
            },
            data: {
                published: req.body.published,
                  belongsid: req.user.id 
            }
        });
        res.status(200).json({ success: true, publishedPost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// deleting the post
export const deletePost = async (req, res) => {
    try {
       
        const deletedPost = await prisma.post.delete({
            where: {
                id: req.post.id
            }
        });
        res.status(200).json({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};
