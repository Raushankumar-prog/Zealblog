import {Router} from 'express'
import { createComment, deleteComment, updateComment } from './handlers/comment'
import { createPost, deletePost, publish, updatePost } from './handlers/post';
import { deleteuser } from './handlers/user';

const router = Router()


 router.post('/createcomment',createComment);
 router.delete('/deletecomment',deleteComment);
router.put('/updatecomment',updateComment);
 router.post('/createpost',createPost);
router.delete('/deletepost',deletePost);
router.put('/updatepost',updatePost);
router.put('/publish',publish);

router.delete('/deleteuser',deleteuser);




export default router