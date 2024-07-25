import prisma from '../db';
import { putObject,getObjectURL } from '../aws/fileupload';
import client  from '../cache';






export const getImage = async (req, res) => {
    try {
        const imageName = req.params.imageName;
        const imageUrl = await getObjectURL(`upload/image/${imageName}`);
        res.status(200).json({ imageUrl }); 
    } catch (error) {
        // Handle errors appropriately, e.g., sending an error response
        console.error('Error getting image URL:', error);
        res.status(500).json({ error: 'Failed to get image URL' });
    }
};





// export const getVideo = async (req, res) => {
//     try {
//         const videoName = req.params.videoName;
//         const videoUrl = await getObjectURL(`upload/image/${videoName}`);
//         res.status(200).json({ videoUrl }); 
//     } catch (error) {
//         // Handle errors appropriately, e.g., sending an error response
//         console.error('Error getting image URL:', error);
//         res.status(500).json({ error: 'Failed to get image URL' });
//     }
// };





// export const gettxt= async (req, res) => {
//     try {
//         const txtName = req.params.txtName;
//         const txtUrl = await getObjectURL(`upload/image/${txtName}`);
//         res.status(200).json({ txtUrl }); 
//     } catch (error) {
//         // Handle errors appropriately, e.g., sending an error response
//         console.error('Error getting image URL:', error);
//         res.status(500).json({ error: 'Failed to get image URL' });
//     }
// };









export const uploadImage=async(req,res)=>{
  
const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() +'' + (today.getMonth() + 1) + '' + today.getDate();
    const time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    const dateTime = date + '' + time;
    return dateTime;
};

  const imagedate=`image-${giveCurrentDateTime()}.jpg`; 
  try{
     const imageaws=await putObject(imagedate,"image/jpeg");
     
     res.status(200).json({ success: true, imageaws,imagedate });
  }

  catch(error){
     console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
}






export const uploadVideo=async(req,res)=>{
  
const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() +'' + (today.getMonth() + 1) + '' + today.getDate();
    const time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    const dateTime = date + '' + time;
    return dateTime;
};

  const videodate=`video-${giveCurrentDateTime()}.mp4`; 
  try{
     const videoaws=await putObject(videodate,"video/mp4");
     
     res.status(200).json({ success: true,videoaws,videodate });
  }

  catch(error){
     console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
}








export const uploadText=async(req,res)=>{
  
const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() +'' + (today.getMonth() + 1) + '' + today.getDate();
    const time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    const dateTime = date + '' + time;
    return dateTime;
};

  const txtdate=`image-${giveCurrentDateTime()}.txt`; 
  try{
     const txtaws=await putObject(txtdate,"text/plain");
     
     res.status(200).json({ success: true, txtaws,txtdate });
  }

  catch(error){
     console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
}

















export const createPost = async (req, res) => {
  try {
   
    const post = await prisma.post.create({
      
      data: {
        title: req.body.title,
        content: req.body.content,
        nichetype: req.body.nichetype,
        belongsid: req.body.id,
        imageName:req.body.image,
        videoName:req.body.video,
        txtName:req.body.text
      },
  
    });
   
    res.status(200).json({ success: true, post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
};










export const updatePost = async (req, res) => {
  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: req.body.id,
      },
      data: {
        title: req.body.title,
        content: req.body.content,
        nichetype: req.body.nichetype,
        belongsid: req.body.belongsid,
      },
    });

    res.status(200).json({ success: true, updatedPost });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, error: 'Internal Server Error' });
  } 
};







export const deletePost = async (req, res) => {
  try {
     const id = req.params.id;
    const deletedPost = await prisma.post.delete({
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



export const publish = async (req, res) => {
  try {
    const publishedPost = await prisma.post.update({
      where: {
        id: req.body.id,
      },
      data: {
        published: req.body.publish,
        belongsid: req.body.belongsid,
      },
    });

   
    res.status(200).json({ success: true, publishedPost });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, error: 'Internal Server Error' });
  } 
};



export const latestPost = async (req, res) => {
  try {
    // Check if data is cached in Redis
    const cachedPosts = await client.get('latestPosts');

    if (cachedPosts) {
      // Parse cached data and return response
      const latestPostsWithURLs = JSON.parse(cachedPosts);
      return res.status(200).json({ latestPosts: latestPostsWithURLs });
    } else {
      // If not cached, fetch from the database
      const latestPosts = await prisma.post.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          title: true,
          content: true,
          nichetype: true,
          belongsid: true,
          imageName: true,
          createdAt: true,
          beongsto: {
            select: {
              username: true,
              id: true,
              image: true,
            },
          },
        },
      });

      const latestPostsWithURLs = await Promise.all(latestPosts.map(async post => {
        const imageUrl = await getObjectURL(`upload/image/${post.imageName}`);
        const userimage = await getObjectURL(`upload/image/${post.beongsto.image}`);

        return { ...post, imageUrl, userimage };
      }));

      // Cache the result in Redis
      await client.setEx('latestPosts', 3600, JSON.stringify(latestPostsWithURLs)); // Cache for 1 hour

      res.status(200).json({ latestPosts: latestPostsWithURLs });
    }
  } catch (error) {
    console.error('Error fetching latest posts:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






export const profilePost = async (req, res) => {
 
  try {
     const id = req.params.id;
        
    const profilePosts = await prisma.post.findMany({
      where: {
        belongsid:id,
      },
      orderBy: {
        createdAt: 'desc',
      },
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
             id:true,
             image:true,

          },
        },
      },
    });
     
 const popularPostsWithURLs = await Promise.all(profilePosts.map(async post => {
      const imageUrl = await getObjectURL(`upload/image/${post.imageName}`);
      const  userimage=await getObjectURL(`upload/image/${post.beongsto.image}`)
      return { ...post, imageUrl,userimage};
    }));

    res.status(200).json({ profilePosts:popularPostsWithURLs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
};







export const popularPosts = async (req, res) => {
  
  const sortOrder ='desc';

  try {
    
    const cacheKey = "popularPosts";
    const cachedPosts = await client.get(cacheKey);

    if (cachedPosts) {
      
      const popularPostswithurl = JSON.parse(cachedPosts);
      return res.status(200).json({ popularPosts: popularPostswithurl });
    } else {
      
      const popularPosts = await prisma.post.findMany({
        orderBy: {
          like: sortOrder,
        },
        select: {
          id: true,
          title: true,
          content: true,
          nichetype: true,
          belongsid: true,
          imageName: true,
          createdAt: true,
          beongsto: {
            select: {
              id: true,
              username: true,
              image: true,
            }
          }
        },
      });

      const popularPostswithurl = await Promise.all(popularPosts.map(async post => {
        const imageUrl = await getObjectURL(`upload/image/${post.imageName}`);
        const userimage = await getObjectURL(`upload/image/${post.beongsto.image}`);
        return { ...post, imageUrl, userimage };
      }));

      // Cache the result in Redis
      await client.setEx(cacheKey, 3600, JSON.stringify(popularPostswithurl)); 

      res.status(200).json({ popularPosts: popularPostswithurl });
    }
  } catch (error) {
    console.error('Error fetching popular posts:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } 
};
