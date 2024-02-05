import {Router} from 'express'
import { createComment, deleteComment, updateComment } from './handlers/comment'
import { createPost, deletePost, latestPost, popularPosts, profilePost, publish, updatePost } from './handlers/post';
import { deleteuser } from './handlers/user';
import { getAuthors } from './handlers/author';
import { deletingsavedPost, savedPost, savingPost } from './handlers/save';
//import {upload} from '../sfc/handlers/post';
const router = Router()


router.post('/createcomment',createComment);
router.delete('/deletecomment',deleteComment);
router.patch('/updatecomment',updateComment);
router.post('/createpost',createPost);
router.delete('/deletepost/:PostId',deletePost);
router.patch('/updatepost',updatePost);
router.put('/publish',publish);
router.get('/popularpost',popularPosts);
router.get('/getauthors',getAuthors);
router.get('/lastestpost',latestPost);
router.delete(`/deleteuser/:id`,deleteuser);
router.get('/profilepost/:id',profilePost);
router.post('/savingpost',savingPost);
router.get('/savedpost/:id',savedPost);
router.delete('deletingsavedpost',deletingsavedPost);

export default router
