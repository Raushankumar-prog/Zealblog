import './left.css';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Saved from '@mui/icons-material/BookmarkBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Left = () => {
    return (
         <div className="fr">
        <div className="category1" >
             <div className="icon"><ExploreIcon  fontSize="small" color="error" /></div> 
              <div className="text"><p className="category">lastest</p></div>
       </div>    
        <div  className="category1">
           <div className="icon"><SubscriptionsIcon fontSize="small" color="error"/></div> 
           <div className="text"><p className="category">subscribe</p></div>
        </div>
        <div  className="category1">
             <div className="icon"><TrendingUpIcon fontSize="small" color="error"/></div> 
             <div className="text"><p className="category">popular</p></div>
        </div>
        <div  className="category1">
             <div className="icon"><Saved fontSize="small" color="error"/></div> 
             <div className="text"><p className="category">saved</p></div>
        </div>
        <div  className="category1">
             <div className="icon"><ShareIcon fontSize="small" color="error"/></div> 
             <div className="text"><p className="category">share</p></div>
        </div>
         <div  className="category1">
             <div className="icon"><NotificationsIcon fontSize="small" color="error"/></div> 
             <div className="text"><p className="category">Notification</p></div>
        </div>
        <div  className="category2">
             <div className="icon"><AccountCircleIcon fontSize="small" color="error"/></div> 
              <div className="text"><p className="category">profile</p></div>
       </div>
       <div  className="category1">
             <div className="icon"><SettingsIcon  fontSize="small" color="error"/></div> 
              <div className="text"><p className="category">setting</p></div>
        
       </div>
        </div>    


    );
}
 
export default Left;