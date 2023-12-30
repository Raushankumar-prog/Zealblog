import React, { useEffect } from 'react';
import './glance.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import img from './OIP.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
  
 export const getRandomColor=()=>{
  
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    
    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    return randomColor;
}

const Glance = () => {
     
   //   var randomcolor=color.random();

useEffect(() => {
    const elements = document.getElementsByClassName("remove");

    for (const element of elements) {
      element.style.color = "blue";
    }
  }, []);


    return ( 
              <div className="main1"> 
                         
                   <div className="universe" >
                     <Paper >
                          <Link to="/mainpage" className="remove">
                            <div className="space">
                                   <div className="headingglance"><p className="headingtext">Nasa has launched a new satellite for analyzing the oceans.</p></div>
                                  <div className="glancecontent">
                                        <div className="glanceimage"><img src={img} ></img></div>
                                         <div className="glancebriefbox"><p className="glancebrieftext"> NASA recently launched a cutting-edge satellite dedicated to ocean analysis.<br></br> The mission aims to enhance our understanding of Earth's oceans,<br></br> offering valuable insights into climate patterns, <br></br>sea level rise, and marine ecosystems.

</p></div>
                                   </div>
                            </div>
                              </Link>
                            <div className="little">
                                     <div className="author">   <div className="channelicon"><AccountCircleIcon fontSize="large" style={{ color: getRandomColor() }}/></div>
                                                                       <div className="profile">profile</div>
                           </div>
                                     <div className="like"><ThumbUpOffAltIcon style={{ color: getRandomColor() }}/></div>
                                     <div className="comment"><CommentIcon  style={{ color: getRandomColor() }}/></div>
                            </div>
                              </Paper>
                   </div>
                 
                  
                            <div className="universe">
                     <Paper >
                          <Link to="/mainpage" className="remove">
                            <div className="space">
                                   <div className="headingglance"><p className="headingtext">Nasa has launched a new satellite for analyzing the oceans..</p></div>
                                  <div className="glancecontent">
                                        <div className="glanceimage"><img src={img} ></img></div>
                                         <div className="glancebriefbox"><p className="glancebrieftext"></p></div>
                                   </div>
                            </div>
                              </Link>
                            <div className="little">
                                     <div className="author">   <div className="channelicon"><AccountCircleIcon fontSize="large" style={{ color: getRandomColor() }}/></div>
                                                                       <div className="profile">profile</div>
                           </div>
                                     <div className="like"><ThumbUpOffAltIcon style={{ color: getRandomColor() }}/></div>
                                     <div className="comment"><CommentIcon  style={{ color: getRandomColor() }}/></div>
                            </div>
                              </Paper>
                   </div>
                 
                  
                   
              </div>
    );
}
 
export default Glance;
