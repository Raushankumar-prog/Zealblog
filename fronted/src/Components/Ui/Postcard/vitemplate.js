// PostCard.js
import React from 'react';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './vi.css';

const ViTemplate = ({ post}) => {

  return (
  
    
       
      <Paper className="papersClass"  sx={{ width: '100%',margin:'0%',padding:'0%'}}>
        
      
     
            <div className="glance">
              <p className="vitext">TITLE:-{post.title}</p>
            </div>
            
        <div className="little">
       <Link to={post.beongsto ? `/U/${post.beongsto.id}` : '/unknownUser'} className='link'>
  <div className="author">
    <div className="vichannelicon">
    {post.userImage ? <img src={post.userImage} alt="Post Image" id="userimages" className='signupimage'/> : <AccountCircleIcon fontSize="large" />}

    </div>
    <div className="viprofile">{post.beongsto ? post.beongsto.username : 'Unknown User'}</div>
  </div>
</Link>          
        </div>
    
      </Paper>
       

    
  );
};

export default ViTemplate;
