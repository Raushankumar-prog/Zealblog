import './glance.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import img from './OIP.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
const Glance = () => {
    return ( 
              <div className="main1"> 
                           <Link to="/mainpage">
                   <div className="universe">
                     <Paper >
                            <div className="space">
                                   <div className="headingglance"><p className="headingtext">Nasa is launching a new rocket for it Artimis mission.</p></div>
                                  <div className="glancecontent">
                                        <div className="glanceimage"><img src={img} ></img></div>
                                         <div className="glancebriefbox"><p className="glancebrieftext"> Artimis is plan of Nasa to land on MOON in 2024.<br></br>They are making rcoket which csn essily take them on moon.</p></div>
                                   </div>
                            </div>
                            <div className="little">
                                     <div className="author">   <div className="channelicon"><AccountCircleIcon fontSize="large"/></div>
                                                                       <div className="profile">profile</div>
                           </div>
                                     <div className="like"><ThumbUpOffAltIcon/></div>
                                     <div className="comment"><CommentIcon/></div>
                            </div>
                              </Paper>
                   </div>
                 
                    </Link>
                  
                   <div className="universe">
                         <Paper>
                            <div className="space">
                                   <div className="headingglance"><p className="headingtext">Nasa is launching a new rocket for it Artimis mission.</p></div>
                                  <div className="glancecontent">
                                        <div className="glanceimage"><img src={img} ></img></div>
                                         <div className="glancebriefbox"><p className="glancebrieftext"> Artimis is plan of Nasa to land on MOON in 2024.<br></br>They are making rcoket which csn essily take them on moon.</p></div>
                                   </div>
                            </div>
                            <div className="little">
                                     <div className="author"> 
                                                     <div className="channelicon"><AccountCircleIcon fontSize="large"/></div>
                                                                       <div className="profile">profile</div>
                            </div>
                                     <div className="like"><ThumbUpOffAltIcon/></div>
                                     <div className="comment"><CommentIcon/></div>
                            </div>
                             </Paper>
                   </div>
                  
                    
                   
              </div>
    );
}
 
export default Glance;
