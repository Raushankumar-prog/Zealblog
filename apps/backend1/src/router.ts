import {Router} from 'express'
import { createComment, deleteComment, updateComment } from './controllers/comment'
import { createPost, deletePost, latestPost, popularPosts, profilePost, publish, updatePost,getImage, uploadImage, uploadVideo, uploadText} from './controllers/post';
import { deleteuser } from './controllers/user';
//import { getAuthors } from './handlers/author';
import { deletingsavedPost, savedPost, savingPost } from './controllers/save';
import { deletinglikedPost, likedPost, likingPost } from './controllers/like';
import { gettingprofile } from './controllers/profile';
import { creatingsubscriber, deletesubscribedto, subscribedto } from './controllers/subscriber';
import { articlereadbyid, articlereadbyyou } from './controllers/articleread';
import { getcontent } from './controllers/content';
import { summarywatchedbyid, videowatchedbyyou } from './controllers/summarywatched';
import { videourl } from './controllers/videourl';
//import { search } from './handlers/search';
//import {upload} from '../sfc/handlers/post';
const router = Router()

router.post('/subscribing',creatingsubscriber);



router.get('/getcontent/:postid',getcontent);
//article read
router.post('/articleread',articlereadbyid);
router.get('/articlereadbyyou/:belongsid',articlereadbyyou);
//videowatched
router.post('/videowatched',summarywatchedbyid);
router.get('/videowatchedbyyou/:belongsid',videowatchedbyyou);
//videourl
router.get('/videourl/:postid',videourl);

router.get('/gettingsubscriber/:ProfileId',subscribedto);

router.delete('/unsubscribe',deletesubscribedto);


router.get('/getimage/:imageName',getImage);
router.get('/getprofile/:providedId',gettingprofile);
router.post('/createcomment',createComment);
router.get('/uploadimage',uploadImage);
router.get('/uploadvideo',uploadVideo);
router.get('/uploadtxt',uploadText);
router.delete('/deletecomment',deleteComment);
router.patch('/updatecomment',updateComment);
router.post('/createpost',createPost);
router.delete('/deletepost/:id',deletePost);
router.patch('/updatepost',updatePost);
router.put('/publish',publish);
router.get('/popularpost/:providedId',popularPosts);
//router.get('/getauthors',getAuthors);
router.get('/lastestpost/:providedId', latestPost);
router.delete(`/deleteuser/:id`,deleteuser);
router.get('/profilepost/:id',profilePost);
router.post('/savingpost',savingPost);
router.get('/savedpost/:id',savedPost);
router.delete('/deletingsavedpost/:id',deletingsavedPost);
router.post('/likingpost',likingPost);
router.get('/likedpost/:id',likedPost);
router.delete('/deletinglikedpost/:id',deletinglikedPost);
//router.get('/search',search)

export default router
