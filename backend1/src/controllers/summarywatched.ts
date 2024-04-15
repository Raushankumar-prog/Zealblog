import prisma from "../db";

export const summarywatchedbyid=async (req,res)=>{
    try{
    const summarywatched=await prisma.summarywatchedbyuser.create({
        data:{
              postid: req.body.postid,
              belongsid: req.body.belongsid,
        },
    });
     res.status(200).json({ success: true, summarywatched });
}catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}