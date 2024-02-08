import {Router} from 'express'
import { createComment, deleteComment, updateComment } from './handlers/comment'
import { createPost, deletePost, latestPost, popularPosts, profilePost, publish, updatePost } from './handlers/post';
import { deleteuser } from './handlers/user';
import { getAuthors } from './handlers/author';
import { deletingsavedPost, savedPost, savingPost } from './handlers/save';
import { deletinglikedPost, likedPost, likingPost } from './handlers/like';
//import {upload} from '../sfc/handlers/post';
const router = Router()


router.post('/createcomment',createComment);
router.delete('/deletecomment',deleteComment);
router.patch('/updatecomment',updateComment);
router.post('/createpost',createPost);
router.delete('/deletepost/:id',deletePost);
router.patch('/updatepost',updatePost);
router.put('/publish',publish);
router.get('/popularpost/:providedId',popularPosts);
router.get('/getauthors',getAuthors);
router.get('/lastestpost/:providedId', latestPost);
router.delete(`/deleteuser/:id`,deleteuser);
router.get('/profilepost/:id',profilePost);
router.post('/savingpost',savingPost);
router.get('/savedpost/:id',savedPost);
router.delete('/deletingsavedpost/:id',deletingsavedPost);
router.post('/likingpost',likingPost);
router.get('/likedpost/:id',likedPost);
router.delete('/deletinglikedpost/:id',deletinglikedPost);


export default router
