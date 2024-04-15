import {S3Client,GetObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl}   from "@aws-sdk/s3-request-presigner";


const s3Client=new S3Client({
    credentials:{
         accessKeyId:process.env.accessKeyId,
         secretAccessKey:process.env.secretAccessKey,
    },
    region:process.env.region,
});

export async function getObjectURL(key){
      const command=new GetObjectCommand({
          Bucket:process.env.Bucket,
          Key:key ,
      });
      const url=await getSignedUrl(s3Client,command);
    
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



// async function init(){
// //console.log("URL for image",await getObjectURL("upload/image/image-1710901776129.jpg"));
// //console.log("url for uploading ",await putObject(`image-${Date.now()}.jpg`,"image/jpeg"));
// }

//init();