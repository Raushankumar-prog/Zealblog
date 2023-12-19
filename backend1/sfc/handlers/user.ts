import prisma from '../db'
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password)
    }
  })

  const token = createJWT(user)
  res.json({ token,user})

}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where:{
      username:req.body.username
    }
  })

  const isValid = await comparePasswords(req.body.password, user.password)

  if (!isValid) {
    res.status(401)
    res.json({message: 'nope'})
    return
  }

  const token = createJWT(user)
  res.json({ token })
}


// deleting the user
export const deleteuser = async (req, res) => {
    try {
         
        const deletedpost= await prisma.user.delete({
            where: {
                id:req.body.id,
            },
        })
            
        res.status(200).json({ success: true, deletedpost});
    } catch (error) {
        console.error(error);
        res.status(404).json({ success: false, error: 'Internal Server Error' });
    }
};
