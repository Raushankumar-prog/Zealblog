import prisma from '../db'


export const createPost = async (req, res) => {
    const post = await prisma.Post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            nichetype: req.body.nichetype
        }
    });
};

export const publish = async (req, res) => {
    const publishpost = await prisma.Post.update({
        data: {
            published: req.body.published
        }
    });
};


export const deletePost = async (req, res) => {
    const id = req.params.id; // Assuming you get the post id from the request parameters
    const deletedPost = await prisma.Post.delete({
        where: {
            id: parseInt(id) // Assuming your id is an integer, adjust accordingly
        }
    });
    res.send("Post deleted successfully");
};
