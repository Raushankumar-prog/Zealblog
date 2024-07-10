import './navigation.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import HistoryIcon from '@mui/icons-material/History';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExploreIcon from '@mui/icons-material/Explore';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link,useLocation} from 'react-router-dom';
import { Button } from '@mui/material';
import Logout from '../../CreateUser/LogOut';
import Subscribe from '../../../Left/LeftComponent/subscribe/subscribe';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Cookies from 'js-cookie';


const Navigation = ({le,setle}) => {
    const [usernotlogin,setuser]=useState(false);
  const { pathname } = useLocation();
 const profileuser = Cookies.get('usernam');
            
 
          useEffect(()=>{
                  if(profileuser){
                  setuser(true);
                          }
                 },[profileuser])
   

    return (

  <div className="navigator">
           <div  className="close" onClick={()=>setle(!le)}><CloseIcon fontSize="large" style={{ color:'white'}} /></div>
 

   


  <Link to="/createpost" className={`link ${pathname === '/createpost' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PostAddSharpIcon fontSize="large" style={{ color:'white'}}  /></div> 
              <div className="text">Post</div>
       </div>    
</Link>
   

  <Link to="latest" className={`link ${pathname === '/latest' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><ExploreIcon  fontSize="large" style={{ color:'white'}}  /></div> 
              <div className="text">latest</div>
       </div>    
</Link>

   <Link to="popular" className={`link ${pathname === '/popular' ? 'active' : ''}`}>
        <div  className="category1">
             <div className="icon"><TrendingUpIcon fontSize="large" style={{color:'white'}} /></div> 
             <div className="text">popular</div>
        </div>
   </Link>  
   <hr></hr> 
   <div className="you">You</div>
           
  <Link to="articlereadbyyou" className={`link ${pathname === '/articlereadbyyou' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><HistoryIcon fontSize="large" style={{ color:'white'}}  /></div> 
              <div className="text">Article read</div>
       </div>    
</Link>        
  <Link to="video" className={`link ${pathname === '/video' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><PlayCircleIcon fontSize="large" style={{ color:'white'}}  /></div> 
              <div className="text">Summary watched</div>
       </div>    
</Link>
{/*
   <Link to="savedpost" className={`link ${pathname === '/savedpost' ? 'active' : ''}`}>
        <div  className="category1">
             <div className="icon"><Saved fontSize="large" style={{color:'white'}} /></div> 
             <div className="text">saved</div>
        </div>
     </Link>
             
  <Link to="/likedpost" className={`link ${pathname === '/likedpost' ? 'active' : ''}`}>
        <div className="category1" >
       
               <div className="icon"><ThumbUpIcon fontSize="large" style={{ color:'white'}}  /></div> 
              <div className="text">Like</div>
       </div>    
</Link>
 */}
   
         <Link to="profile" className={`link ${pathname === '/profile' ? 'active' : ''}`}>
        <div  className="category1">
             <div className="icon"><AccountCircleIcon fontSize="large" style={{color:'white' }} /></div> 
              <div className="text">profile</div>
       </div>
       </Link>
       <hr></hr>
       <div className="subcriptions">Following</div>
          
        <div  className="category1">
           
              <div className="text"><Subscribe/></div>
       </div>
       
       <hr></hr>
    {usernotlogin?
     <div className="text"><p className={usernotlogin ?"category" :"loginkaro"}>
       <Logout/></p></div>
       :
        <><Link to='/login' className='remove'>
            <Button variant="contained" sx={{paddingLeft:'20%',paddingRight:'20%',marginTop:'10%',marginLeft:'10%',backgroundColor:"rgb(60,70,80)"}}>Login</Button></Link>
       </>
   }
  
       
  </div>    


    );
}
 
export default Navigation;