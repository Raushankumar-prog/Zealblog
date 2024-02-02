import prisma from '../db';
// import { initializeApp } from "firebase/app";
// import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import multer from "multer";
// import config from "../config/firebase.config";



const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() +'' + (today.getMonth() + 1) + '' + today.getDate();
    const time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    const dateTime = date + '' + time;
    return dateTime;
}

// //Initialize a firebase application
// initializeApp(config.firebaseConfig);

// // Initialize Cloud Storage and get a reference to the service
// const storage = getStorage();

// // Setting up multer as a middleware to grab photo uploads
// export const upload = multer({ storage: multer.memoryStorage() });

export const createPost = async (req, res) => {
  try {
    // const dateTime = giveCurrentDateTime();
    
    // // Accessing image directly from the request body
    // const fileBuffer = req.body.image;
    // const imageName = `${dateTime}.jpg`; 
    // console.log(imageName)
    // const storageRef = ref(storage, `files/${imageName}`);

    // const metadata = {
    //   contentType: req.body.imagetype,
    // };
   
    // const snapshot = await uploadBytesResumable(storageRef, fileBuffer, metadata);
    
    // const downloadURL = await getDownloadURL(snapshot.ref);

    // if (!fileBuffer || !metadata) {
    //   throw new Error('Invalid file data');
    // }

    const post = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        nichetype: req.body.nichetype,
        belongsid: req.body.id,
        //imageName: downloadURL,
      },
    
    });

    res.status(200).json({ success: true, post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
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
  } finally {
    await prisma.$disconnect();
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: req.body.id,
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

    console.log('Published Post:', publishedPost);
    res.status(200).json({ success: true, publishedPost });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};


export const latestPost = async (req, res) => {
  try {
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
        
      
       // imageName: true,
        createdAt: true,
        beongsto:{
          select:{
            username:true,
          }
        }
      },
    });

    

    res.status(200).json({ latestPosts});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
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
        beongsto: {
          select: {
            username: true,
          },
        },
      },
    });

    res.status(200).json({ profilePosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};

export const popularPosts = async (req, res) => {
  try {
    const sortOrder = req.query.sortOrder || 'desc';

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
       // imageName: true,
        createdAt: true,
        like: true,
         beongsto:{
          select:{
            username:true,
          }
        }
      },
    });

    res.status(200).json({ popularPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
 