import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const bucketName: string = process.env.AWS_BUCKET_NAME || "hdbhfv";
const region: string = process.env.AWS_BUCKET_REGION || " d bhvfgr";
const accessKeyId: string = process.env.AWS_ACCESS_KEY || "hcdvftie";
const secretAccessKey: string = process.env.AWS_SECRET_ACCESS_KEY || "bhugdst";

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export function uploadFile(fileBuffer: Buffer, fileName: string, mimetype: string): Promise<void> {
  const uploadParams = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key: fileName,
    ContentType: mimetype,
  };

  return s3Client.send(new PutObjectCommand(uploadParams))
  .then(()=>{});
}

export function deleteFile(fileName: string): Promise<void> {
  const deleteParams = {
    Bucket: bucketName,
    Key: fileName,
  };

  return s3Client.send(new DeleteObjectCommand(deleteParams))
  .then(()=>{});
}

export async function getObjectSignedUrl(key: string): Promise<string> {
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  const command = new GetObjectCommand(params);
  const seconds = 60;
  const url = await getSignedUrl(s3Client, command, { expiresIn: seconds });

  return url;
}
