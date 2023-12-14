import {Router} from 'express'
import { createComment, deleteComment, updateComment } from './handlers/comment'
import { createPost, deletePost, publish, updatePost } from './handlers/post';

const router = Router()


 router.post('/createcomment',createComment);
 router.delete('/deleteComment',deleteComment);
router.put('/updatecomment',updateComment);
 router.post('/createpost',createPost);
//router.delete('/deletepost/:id',deletePost);
router.put('/updatepost',updatePost);
router.put('/publish',publish);






export default router