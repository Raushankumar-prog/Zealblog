import {Router} from 'express'
import { createComment, deleteComment, updateComment } from './handlers/comment'
import { createPost, deletePost, latestPost, popularPosts, profilePost, publish, updatePost } from './handlers/post';
import { deleteuser, getSavedPosts } from './handlers/user';
import { getAuthors } from './handlers/author';
//import {upload} from '../sfc/handlers/post';
const router = Router()


router.post('/createcomment',createComment);
router.delete('/deletecomment',deleteComment);
router.patch('/updatecomment',updateComment);
router.post('/createpost',createPost);
router.delete('/deletepost',deletePost);
router.patch('/updatepost',updatePost);
router.put('/publish',publish);
router.get('/popularpost',popularPosts);
router.get('/getauthors',getAuthors);
router.get('/lastestpost',latestPost);
router.get('/savaedpost', getSavedPosts);
router.delete('/deleteuser',deleteuser);
router.get('/profilepost',profilePost);


export default router
