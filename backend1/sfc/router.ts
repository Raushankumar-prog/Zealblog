import {Router} from 'express'
import { createComment, deleteComment, updateComment } from './handlers/comment'
import { createPost, deletePost, latestPost, popularPosts, publish, updatePost } from './handlers/post';
import { deleteuser, getSavedPosts } from './handlers/user';

const router = Router()


router.post('/createcomment',createComment);
router.delete('/deletecomment',deleteComment);
router.patch('/updatecomment',updateComment);
router.post('/createpost',createPost);
router.delete('/deletepost',deletePost);
router.patch('/updatepost',updatePost);
router.put('/publish',publish);
router.get('/popularpost',popularPosts);
router.get('/lastestpost',latestPost);
router.get('savedpost',getSavedPosts);
router.delete('/deleteuser',deleteuser);



export default router
