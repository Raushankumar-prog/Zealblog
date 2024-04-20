import { getObjectURL } from '../aws/fileupload';
import prisma from '../db';



export const likingPost = async (req, res) => {
  try {
    
     const  liking = await prisma.liked.create({
      data: {
        postid: req.body.postid,
        belongsid: req.body.belongsid,
      
      },
    
    });

    res.status(200).json({ success: true, liking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};


export const likedPost=async (req,res)=>{
    try{
         const id = req.params.id;
       const liked=await prisma.liked.findMany({
        where:{
            belongsid:id,
        },
        select:{
          id:true,
            belongsid:true,
            
         belongstoposts: {
            select: {
        id: true,
        title: true,
        content: true,
        nichetype: true,
        belongsid: true,
        createdAt: true,
        imageName:true,
        beongsto: {
          select: {
             username: true,
             image:true,
          },
        },
      },
    },
},
       });
        const popularPostsWithURLs = await Promise.all(liked.map(async post => {
   
      const imageUrl=await getObjectURL(`upload/image/${post.belongstoposts.imageName}`);
       const  userimage=await getObjectURL(`upload/image/${post.belongstoposts.beongsto.image}`);
      return { ...post, userimage,imageUrl};
    }));
         res.status(200).json({ liked:popularPostsWithURLs});
        
    }catch(error){
         console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();

    }
}


export const deletinglikedPost = async (req, res) => {
  try {
     const id = req.params.id;
    const deletedlikedPost = await prisma.liked.delete({
      where: {
        id:id,
      },
    });
   res.status(200).json({ success: true, deletedlikedPost });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};