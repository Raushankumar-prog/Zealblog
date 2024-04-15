import { getObjectURL } from '../aws/fileupload';
import prisma from '../db';



export const savingPost = async (req, res) => {
  try {
     const saving = await prisma.saving.create({
      data: {
        postid: req.body.postid,
        belongsid: req.body.belongsid,
      },
    
    });
    res.status(200).json({ success: true, saving });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};


export const savedPost=async (req,res)=>{
    try{
         const id = req.params.id;
       const saved=await prisma.saving.findMany({
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
        imageName:true,
        createdAt: true,
        beongsto: {
          select: {
            username: true,
             id:true,
            image:true,
          },
        },
      },
    },
},
       });
        const popularPostsWithURLs = await Promise.all(saved.map(async post => {
   
      const imageUrl=await getObjectURL(`upload/image/${post.belongstoposts.imageName}`)
       const  userimage=await getObjectURL(`upload/image/${post.belongstoposts.beongsto.image}`)
      return { ...post, userimage,imageUrl};
    }));
         res.status(200).json({ saved:popularPostsWithURLs});
         
    }catch(error){
         console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();

    }
}


export const deletingsavedPost = async (req, res) => {
  try {
     const id = req.params.id;
    const deletedPost = await prisma.saving.delete({
      where: {
        id:id,
      },
    });
   res.status(200).json({ success: true, deletedPost });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};