import { getObjectURL } from "../aws/fileupload";
import prisma from "../db";

export const getcontent = async (req, res) => {
    try {
        const maincontent = await prisma.post.findUnique({
            where: {
                id: req.params.postid, 
            },
            select: {
                id:true,
                title: true,
                imageName: true,
                content: true,
                txtName: true,
                videoName: true,
                createdAt:true,
             
                beongsto: {
                    select: {
                        username: true,
                        image: true,
                        id:true,
                    }
                }
            }
        });

        const imageUrl = await getObjectURL(`upload/image/${maincontent.imageName}`);
        const userImage = await getObjectURL(`upload/image/${maincontent.beongsto.image}`); 
        const  video=await getObjectURL(`upload/image/${maincontent.videoName}`);
        const txtfile=await getObjectURL(`upload/image/${maincontent.txtName}`);
       
       
        const responseData = {
            ...maincontent,
            imageUrl,
            userImage ,
            video,
            txtfile
        };


        res.status(200).json(responseData); 
    } catch (error) {
        console.error('Error fetching latest posts:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
