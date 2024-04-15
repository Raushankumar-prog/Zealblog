import prisma from "../db";

export const articlereadbyid=async (req,res)=>{
    try{
    const articleread=await prisma.articlereadbyuser.create({
        data:{
              postid: req.body.postid,
              belongsid: req.body.belongsid,
        },
    });
     res.status(200).json({ success: true, articleread });
}catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}