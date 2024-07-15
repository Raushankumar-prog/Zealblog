import {S3Client,GetObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl}   from "@aws-sdk/s3-request-presigner";


const s3Client=new S3Client({
    credentials:{
         accessKeyId:process.env.accessKeyId,
         secretAccessKey:process.env.secretAccessKey,
    },
    region:process.env.region,
});



export async function getObjectURL(key,expiresIn=3600){
      const command=new GetObjectCommand({
          Bucket:process.env.Bucket,
          Key:key ,
   
      });
      const url=await getSignedUrl(s3Client,command,{ expiresIn });
    
      return url;
}



export async function putObject(filename,contentType){
    const command=new PutObjectCommand({
        Bucket:process.env.Bucket,
        Key:`upload/image/${filename}`,
        ContentType:contentType
    })
    const url=await getSignedUrl(s3Client,command);
    return url;
}


