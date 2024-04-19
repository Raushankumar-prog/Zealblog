import { getObjectURL } from "../aws/fileupload";
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






export const videowatchedbyyou=async (req,res)=>{
  try{
    const videowatched=await prisma.summarywatchedbyuser.findMany({
      where:{
        belongsid:req.params.id
      },select:{
         id:true,
        belongstoposts:{
          select:{
            videoName:true,
            title:true,
          }
        }
      }
    });


  

 const getVideoUrl= async () => {
      const videoUrlPromises = videowatched.map(async (video) => {
          const  videoUrl = await getObjectURL(`upload/image/${video.belongstoposts.videoName}`);
        
        return { ...videowatched,videoUrl};
      });
    
      return await Promise.all(videoUrlPromises);
    };
      const videoWithUrls = await getVideoUrl();

    res.status(200).json({success:true, videowatched:videoWithUrls})
  }catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}