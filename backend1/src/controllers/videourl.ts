import { getObjectURL } from "../aws/fileupload";
import prisma from "../db";

export const videourl=async(req,res)=>{
    try{
    const video=await prisma.post.findUnique({
        where:{
           id:req.params.postid,
        },
        select:{
            videoName:true,
        }
    })
      const  videoUrl = await getObjectURL(`upload/image/${video.videoName}`);
         res.status(200).json({ success: true, videoUrl });
    }catch(error){
         console.error(error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
    }finally {
    await prisma.$disconnect();
  }
}