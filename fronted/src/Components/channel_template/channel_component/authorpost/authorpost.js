import './authorpost.css';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import img from '../../../Glance/OIP.jpeg';

const Authorpost = () => {
    return ( <div className="authorposting">
                            <div className='posted'>
                               
                                   <div className='postimage'><img src={img}/></div>
                                    <div className="postnichenamebox"> <span className='postnichename'>Space News</span></div> 
                                   <div className='postheadingbox'><span className="postheading">Moon mission lead by billionaire Raushan kumar is about to complete</span></div>
                                    <div className='authorbox'>
                                            
                                                <span className='authorheading'>raushan kumar</span>
                                                <div  className='authorheadingline'><hr className="vertical" color="black"/></div>
                                                <span  className='authorheading'>1-2-2022</span>
                                    </div>
                            </div>
                      <div className='postline'><hr className="vertical1"/> </div>       
    </div> );
}
 
export default Authorpost;