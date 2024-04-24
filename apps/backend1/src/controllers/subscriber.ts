
import { getObjectURL } from '../aws/fileupload';
import prisma from '../db';

export const creatingsubscriber=async (req,res) =>{
      try{
      const subscribing=await  prisma.userSubscription.create({
        data:{
           subscribedId:req.body.subscribedId,
           subsciberId:req.body.subscriberId
        },
    });
        res.status(200).json({success: true, subscribing});
  
      }catch(error){
        console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
      }
}




export const subscribedto=async (req,res)=>{
  try{
    const yousubscribedto=await prisma.userSubscription.findMany({
      where:{
        subsciberId:req.params.id
      },
      select:{
              subscribedId:true,
              belongsto:{
                select:{
                      id:true,
                      image:true,
                      username:true,
                  }
                    
        }
      }
    })

      const subscriberlist= await Promise.all(yousubscribedto.map(async post => {
      const userimage = await getObjectURL(`upload/image/${post.belongsto.image}`);

      return { ...yousubscribedto,userimage};
    }));


     res.status(200).json({success: true, subscriber:subscriberlist});
  
  }catch(error){
     console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
      }
  }



  export const deletesubscribedto=async (req,res)=>{
    try{
     where:{
      subscribedto:req.params.id
     }
    }catch(error){
      console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
    }
  }