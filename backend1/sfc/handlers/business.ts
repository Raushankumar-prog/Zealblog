import prisma from '../db'

export const createPost=async(req,res)=>{
    const post=await prisma.Post.create({
        data:{
           title:req.Post.title,
           content:req.Post.content,
           nichetype:req.Post.nichetype
    }
    })
}


export const publish=async(req,res)=>{
    const publishpost=await prisma.Post.update({
        data:{
           published:req.Post.published
        }
    })
}

const deletedPost = await prisma.Post.delete({
      where: {
        id: id
      },
    })