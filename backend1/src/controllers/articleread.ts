import { getObjectURL } from "../aws/fileupload";
import prisma from "../db";




export const articlereadbyid=async (req,res)=>{
    try{
    const articleread=await prisma.articlereadbyuser.create({
        data:{
              postid: req.body.postid,
              belongsid: req.body.belongsid,
        },
    });
     res.status(200).json({ success: true,it:articleread });
}catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
}








export const articlereadbyyou = async (req, res) => {
  try {
    const articleread = await prisma.articlereadbyuser.findMany({
      where: {
        belongsid: req.params.belongsid
      },
      select: {
        id: true,
        postid: true,
        belongsto: {
          select: {
            id:true,
            username: true,
            image: true,
          }
        },
        belongstoposts: {
          select: {
            title: true,
            content: true,
            imageName: true,
          }
        }
      }
    });

    const getImageUrls = async () => {
      const imageUrlPromises = articleread.map(async (article) => {
        const postImageUrl = await getObjectURL(`upload/image/${article.belongstoposts.imageName}`);
        const userImageUrl = await getObjectURL(`upload/image/${article.belongsto.image}`);
        return { ...article, postImageUrl, userImageUrl };
      });
      return await Promise.all(imageUrlPromises);
    };

    const articlesWithImageUrls = await getImageUrls();

    res.status(200).json({ success: true, articleread: articlesWithImageUrls });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
}



