import './left.css';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Saved from '@mui/icons-material/BookmarkBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
const Left = () => {
  const color = () => {
   return ["purple", "orange", "yellow"];
}

const profile=Cookies.get('usernam');
console.log(profile);

    return (
  <div className="fr">
<Link to="/createpost" className='link'>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }}  /></div> 
              <div className="text"><p className="category">Post</p></div>
       </div>    
</Link>
  <Link to="lastest" className='link'>
        <div className="category1" >
       
               <div className="icon"><ExploreIcon  fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }}  /></div> 
              <div className="text"><p className="category">lastest</p></div>
       </div>    
</Link>
{/* <Link to="subscribe" className='link'>
        <div  className="category1">
             <div className="icon"><SubscriptionsIcon fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }} /></div> 
             <div className="text"><p className="category">subscribe</p></div>
        </div>
    </Link>
    */}
   <Link to="popular" className='link'>
        <div  className="category1">
             <div className="icon"><TrendingUpIcon fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }} /></div> 
             <div className="text"><p className="category">popular</p></div>
        </div>
   </Link>   
   <Link to="savedpost" className='link'>
        <div  className="category1">
             <div className="icon"><Saved fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }} /></div> 
             <div className="text"><p className="category">saved</p></div>
        </div>
     </Link>
    
      <Link to="notification" className='link'>
         <div  className="category1">
             <div className="icon"><NotificationsIcon fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }} /></div> 
             <div className="text"><p className="category">Notification</p></div>
        </div>
        </Link>

         <Link to="profile" className='link'>
        <div  className="category2">
             <div className="icon"><AccountCircleIcon fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }} /></div> 
              <div className="text"><p className="category">profile</p></div>
       </div>
       </Link>
       
  </div>    


    );
}
 
export default Left;