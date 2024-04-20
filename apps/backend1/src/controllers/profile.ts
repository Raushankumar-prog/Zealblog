import { getObjectURL } from "../aws/fileupload";
import prisma from "../db";

export const gettingprofile = async (req, res) => {
    const providedId = req.params.providedId;
    try {
        console.log(req);
        const getmyprofile = await prisma.user.findUnique({
            where: {
                id: providedId,
            },
            select: {
                username: true,
                image: true,
                imagebanner: true,
                profession: true,
                description: true,
            }
        });

        const imagebannerurl = await getObjectURL(`upload/image/${getmyprofile.imagebanner}`);
        const userimage = await getObjectURL(`upload/image/${getmyprofile.image}`);

        const profileWithUrls = {
            ...getmyprofile,
            imagebannerurl,
            userimage
        };

        res.status(200).json({ getmyprofile: profileWithUrls });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}
