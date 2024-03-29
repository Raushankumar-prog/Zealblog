import {Routes,Route} from 'react-router-dom';
import Author from '../Components/footer/components/author/author';
import Mainpage from '../mainpage/mainpage';
import Glance from '../Components/Glance/glance';
import Lastest from '../Components/left/leftcomponent/lastest/lastest';
import Notification from  '../Components/left/leftcomponent/notification/notification';
import Popular from '../Components/left/leftcomponent/popular/popular';
import Profile from '../Components/left/leftcomponent/profile/profile';
//import Saved from '../Components/left/leftcomponent/saved/saved';
import Setting from '../Components/left/leftcomponent/setting/setting';
import Subscribe from '../Components/left/leftcomponent/subscribe/subscribe';
import Advertising from '../Components/footer/components/advertising/advertising';
import Careers from '../Components/footer/components/careers/careers';
import Cookiespolicy from '../Components/footer/components/cookies policy/cookies';
import Terms from '../Components/footer/components/terms/terms';
import Home from '../Components/left/leftcomponent/home/home';
import ShareButton from '../Components/left/leftcomponent/share/share';
import Savedd from '../Components/left/leftcomponent/saved/saved';
import U from '../Components/ui/userprofile/userprofile';
import Paymentsystem from '../Components/ui/payment/payment';
// import Searchpost from '../Components/header/searchpost/searchpost';
const Routing = () => {
    return ( <div>
        <Routes>
     
      <Route path="/author" element={<Author/>}/>
      <Route path="/paymentsystem" element={<Paymentsystem/>}/>
      <Route path="/:userId" element={<U/>}/>
      <Route path="/" element={<Lastest/>}/>
      <Route path="/mainpage" element={<Mainpage/>}/>
      <Route path="/lastest" element={<Lastest/>}/>
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/popular"  element={<Popular/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/savedpost" element={<Savedd/>}/>
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