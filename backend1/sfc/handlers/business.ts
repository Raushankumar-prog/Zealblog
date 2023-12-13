import prisma from '../db'

//creating the post
export const createPost = async (req, res) => {
    const post = await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            nichetype: req.body.nichetype
        }
    });
};

// updating the post
export const updatePost=async(req,res)=>{
    const updatepost=await prisma.post.update({
       where:{
        id:req.body.id
       },
       data:{
        title:req.body.title,
        content:req.body.content,
        nichetype:req.body.nichetype
       }
     } );

    
}
//updating the publish timing

export const publish = async (req, res) => {
    const publishpost = await prisma.post.update({
        where:{
               id:req.body.id
        },
        data: {
            published: req.body.published
        }
    });
};

//deleting the post
export const deletePost = async (req, res) => {
    const id = req.params.id; // Assuming you get the post id from the request parameters
    const deletedPost = await prisma.post.delete({
        where: {
            id: id
        }
    });
    res.send("Post deleted successfully");
};
