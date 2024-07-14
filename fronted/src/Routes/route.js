import {Routes,Route} from 'react-router-dom';
import Latest from '../Components/Left/LeftComponent/latest/latest';
import Popular from '../Components/Left/LeftComponent/popular/popular';
import Profile from '../Components/Left/LeftComponent/profile/profile';
import Subscribe from '../Components/Left/LeftComponent/subscribe/subscribe';
import Home from '../Components/Left/LeftComponent/home/home';
import ShareButton from '../Components/Left/LeftComponent/share/share';
import Savedd from '../Components/Left/LeftComponent/saved/saved';
import U from '../Components/Ui/UserProfile/UserProfile';
import UserLogin from '../Components/Ui/CreateUser/login';
import SignUP from '../Components/Ui/CreateUser/signup';
import Like from '../Components/Left/LeftComponent/Like/Like';
import ArticleRead from '../Components/Left/LeftComponent/ArticleRead/ArticleRead';
import Content from '../Components/Ui/Content/Content';
import SummaryWatched from '../Components/Ui/SummaryWatched/SummaryWatched';
import Videoplayed from '../Components/Ui/VideoPlayed/VideoPlayed';





const Routing = () => {
    return ( <div>
        <Routes>
  
      <Route path='/articlereadbyyou' element={<ArticleRead/>}/>
      <Route path='/video'  element={<SummaryWatched/>}/>
      <Route path='/videoplayed/:postid' element={<Videoplayed/>}/>
      <Route path='/content/:postid' element={ <Content />} />
      <Route path='/login'  element={<UserLogin/>}/>
      <Route path='/signup'  element={<SignUP/>}/>
      <Route path="/U/:userId" element={<U/>}/>
      <Route path="/" element={<Latest/>}/>
      <Route path="/latest" element={<Latest/>}/>
      <Route path="/popular"  element={<Popular/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/savedpost" element={<Savedd/>}/>
      <Route path='/likedpost'  element={<Like/>}/>
      <Route path='/share'   element={<ShareButton/>}/>
      <Route path="/subscribe" element={<Subscribe/>}/>
      <Route path="/createpost" element={<Home/>}/>
      
       </Routes>
    </div> );
}
 
export default Routing;