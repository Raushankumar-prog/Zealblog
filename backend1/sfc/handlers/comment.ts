import prisma from "../db";


// creating the comment
export const createCommnet = async (req, res) => {
    try {
        const post = await prisma.comment.create({
            data: {
               
            content: req.body.content,
        
            }
        });
        res.status(200).json({ success: true, post });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// updating the comment
export const updatePost = async (req, res) => {
    try {
        const updatedPost = await prisma.comment.update({
            where: {
                id: req.body.id
            },
            data: {
            
                content: req.body.content,
                
            }
        });
        res.status(200).json({ success: true, updatedPost });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// deleting the comment
export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPost = await prisma.comment.delete({
            where: {
                id: id
            }
        });
        res.status(200).json({ success: true, message: 'comment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};
