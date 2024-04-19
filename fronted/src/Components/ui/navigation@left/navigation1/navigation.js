import './navigation.css';
import Saved from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link,useLocation} from 'react-router-dom';
import { blue } from '@mui/material/colors';
import Logout from '../../CreateUser/LogOut';
import Subscribe from '../../../Left/LeftComponent/subscribe/subscribe';



const Navigation = () => {

  const { pathname } = useLocation();



    return (

  <div className="navigator">
           
  <Link to="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category">Home</p></div>
       </div>    
</Link>       
  <Link to="/createpost" className={`link ${pathname === '/createpost' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category">Post</p></div>
       </div>    
</Link>
  <Link to="latest" className={`link ${pathname === '/latest' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><ExploreIcon  fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category">latest</p></div>
       </div>    
</Link>
{/* <Link to="subscribe" className='link'>
        <div  className="category1">
             <div className="icon"><SubscriptionsIcon fontSize="small" style={{ color: color()[Math.floor(Math.random() * 3)] }} /></div> 
             <div className="text"><p className="category">subscribe</p></div>
        </div>
    </Link>
    */}
   <Link to="popular" className={`link ${pathname === '/popular' ? 'active' : ''}`}>
        <div  className="category1">
             <div className="icon"><TrendingUpIcon fontSize="small" style={{color:'white'}} /></div> 
             <div className="text"><p className="category">popular</p></div>
        </div>
   </Link>  
   <hr></hr> 
   <div className="you">You</div>
           
  <Link to="articlereadbyyou" className={`link ${pathname === '/articlereadbyyou' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category">Article read</p></div>
       </div>    
</Link>        
  <Link to="video" className={`link ${pathname === '/video' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category">Summary watched</p></div>
       </div>    
</Link>
   <Link to="savedpost" className={`link ${pathname === '/savedpost' ? 'active' : ''}`}>
        <div  className="category1">
             <div className="icon"><Saved fontSize="small" style={{color:'white'}} /></div> 
             <div className="text"><p className="category">saved</p></div>
        </div>
     </Link>
             
  <Link to="/likedpost" className={`link ${pathname === '/likedpost' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category">Like</p></div>
       </div>    
</Link>
    {/*
      <Link to="notification" className={`link ${pathname === '/notification' ? 'active' : ''}`}>
         <div  className="category1">
             <div className="icon"><NotificationsIcon fontSize="small" style={{ color:'white'  }} /></div> 
             <div className="text"><p className="category">Notification</p></div>
        </div>
        </Link>
*/}
         <Link to="profile" className={`link ${pathname === '/profile' ? 'active' : ''}`}>
        <div  className="category1">
             <div className="icon"><AccountCircleIcon fontSize="small" style={{color:'white' }} /></div> 
              <div className="text"><p className="category">profile</p></div>
       </div>
       </Link>
       <hr></hr>
       <div className="subcriptions">Following</div>
          
        <div  className="category1">
             <div className="icon"><AccountCircleIcon fontSize="small" style={{color:'white' }} /></div> 
              <div className="text"><p className="category"><Subscribe/></p></div>
       </div>
       
       <hr></hr>
     {/*<div className="writer">Be Writer</div>
               
  <Link to="/createpost" className={`link ${pathname === '/createpost' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category">write</p></div>
       </div>    
</Link>
        
  <Link to="/createpost" className={`link ${pathname === '/createpost' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="small" style={{ color:'white'}}  /></div> 
              <div className="text"><p className="category"> Topic trending</p></div>
       </div>    
</Link>*/}
   <div className="text"><p className="category"><Logout/></p></div>
       {/*
         <Link to="setting" className={`link ${pathname === '/setting' ? 'active' : ''}`}>
        <div  className="category1">
             <div className="icon"><LockIcon fontSize="small" style={{ color:'white' }} /></div> 
              <div className="text"><p className="category">Login</p></div>
       </div>
       </Link>
*/}
  </div>    


    );
}
 
export default Navigation;