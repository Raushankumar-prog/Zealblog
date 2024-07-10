 import prisma from "../db"; 


        
export const updatelikes = async (req, res) => {
  const  postId=req.params.postid;
  try {
   
     await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                like: {
                    increment: 1,
                },
            },
        });
   
    res.status(200).json({ success: true});
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, error: 'Internal Server Error' });
  } 
};


   
export const updateliked = async (req, res) => {
  const  postId=req.params.postid;
  try {
   
     await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                like: {
                    increment:3,
                },
            },
        });
   
    res.status(200).json({ success: true});
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, error: 'Internal Server Error' });
  } 
};
