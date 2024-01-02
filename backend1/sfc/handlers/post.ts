import prisma from '../db';
import crypto from 'crypto';
import { bucket } from './firebase';

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

export const createPost = async (req, res) => {
  try {
    const imageName = generateFileName();
    const fileBuffer = req.file.buffer;

    // Uploading image to Firebase Storage
    await bucket.file(imageName).save(fileBuffer, {
      metadata: {
        contentType: req.file.mimetype,
      },
      resumable: false,
    });

    const post = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        nichetype: req.body.nichetype,
        belongsid: req.body.id,
        imageName,
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

    await bucket.file(deletedPost.imageName).delete();

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


const generateImageUrls = async (posts) => {
  return Promise.all(
    posts.map(async (post) => {
      const imageUrl = await bucket.file(post.imageName).getSignedUrl({
        action: 'read',
        expires: '2030-01-01',
      });
      return { ...post, imageUrl };
    })
  );
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
        imageName: true,
        createdAt: true,
      },
    });

    const postsWithImageUrls = await generateImageUrls(latestPosts);

    res.status(200).json({ latestPosts: postsWithImageUrls });
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
        imageName: true,
        createdAt: true,
        like: true,
      },
    });

    const postsWithImageUrls = await generateImageUrls(popularPosts);

    res.status(200).json({ popularPosts: postsWithImageUrls });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
