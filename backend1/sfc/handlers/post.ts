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
                id:req.body.id,
            },
            data: {
                title:req.body.title,
                content: req.body.content,
                nichetype:req.body.nichetype,
                 belongsid:req.body.belongsid,
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
                id:req.body.id,
            },
            data: {
                published:req.body.publish,
                belongsid:req.body.belongsid,
            }
        });
        console.log('Published Post:', publishedPost);
        res.status(200).json({ success: true, publishedPost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// deleting the post
export const deletePost = async (req, res) => {
    try {
       
        const user= await prisma.post.findUnique({
            where: {
                id:5,
            }
        });
        const deletedPost=await prisma.post.delete({
            data:{
                id:user,
            }
        })
        res.status(200).json({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};
