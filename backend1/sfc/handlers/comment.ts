import prisma from '../db';

// creating the comment
export const createComment = async (req, res) => {
    try {
        const comment = await prisma.comment.create({
            data: {
                content:req.body.content,
                
                belongsid:req.body.id,
            }
            });
        res.status(200).json({ success: true, comment });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// updating the comment
export const updateComment = async (req, res) => {
    try {
        const updatedComment = await prisma.comment.update({
            where: {
                id:req.body.id,
            },
            data: {
               content: req.body.content, 
               belongsid: req.body.belongsid,
            }
        });
        res.status(200).json({ success: true, updatedComment });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};

// deleting the comment
export const deleteComment = async (req, res) => {
    try {
       
        const deletedComment = await prisma.comment.delete({
            where: {
                id: req.body.id,
            }
        });
        res.status(200).json({ success: true, message: 'Comment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};
