import {Routes,Route} from 'react-router-dom';
import Author from '../Components/Footer/components/author/author';
import HomePage from '../HomePage/HomePage';
import Glance from '../Components/Glance/glance';
import Latest from '../Components/Left/LeftComponent/latest/latest';
import Notification from  '../Components/Left/LeftComponent/notification/notification';
import Popular from '../Components/Left/LeftComponent/popular/popular';
import Profile from '../Components/Left/LeftComponent/profile/profile';
//import Saved from '../Components/left/leftcomponent/saved/saved';
import Setting from '../Components/Left/LeftComponent/setting/setting';
import Subscribe from '../Components/Left/LeftComponent/subscribe/subscribe';
import Advertising from '../Components/Footer/components/advertising/advertising';
import Careers from '../Components/Footer/components/careers/careers';
import Cookiespolicy from '../Components/Footer/components/cookies policy/cookies';
import Terms from '../Components/Footer/components/terms/terms';
import Home from '../Components/Left/LeftComponent/home/home';
import ShareButton from '../Components/Left/LeftComponent/share/share';
import Savedd from '../Components/Left/LeftComponent/saved/saved';
import U from '../Components/Ui/UserProfile/UserProfile';
import Paymentsystem from '../Components/Ui/Payment/Payment';
import UserLogin from '../Components/Ui/CreateUser/login';
import SignUP from '../Components/Ui/CreateUser/signup';
import Like from '../Components/Left/LeftComponent/Like/Like';
// import Login from '../Components/googlelogin/login';
//import Signup from '../Components/googlelogin/signup';
// import Searchpost from '../Components/header/searchpost/searchpost';

const Routing = () => {
    return ( <div>
        <Routes>
   {/*  
     // <Route path="/author" element={<Author/>}/>
    <Route path="/login"  element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>*/}
      <Route path='/login'  element={<UserLogin/>}/>
      <Route path='/signup'  element={<SignUP/>}/>
      <Route path="/paymentsystem" element={<Paymentsystem/>}/>
      <Route path="/:userId" element={<U/>}/>
      <Route path="/" element={<Latest/>}/>
      <Route path="/mainpage" element={<HomePage/>}/>
      <Route path="/latest" element={<Latest/>}/>
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/popular"  element={<Popular/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/savedpost" element={<Savedd/>}/>
      < Route path='/likedpost'  element={<Like/>}/>
      <Route path="/setting"  element={<Setting/>}/>
      <Route path='/share'   element={<ShareButton/>}/>
      <Route path="/subscribe" element={<Subscribe/>}/>
      <Route path="/advertising"  element={<Advertising/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/cookiespolicy" element={<Cookiespolicy/>}/>
      <Route path="/terms&conditions" element={<Terms/>}/>
      <Route path="/createpost" element={<Home/>}/>
       </Routes>
    </div> );
}
 
export default Routing;