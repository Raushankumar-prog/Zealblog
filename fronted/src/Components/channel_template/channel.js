import './channel.css';
import img from '../Glance/OIP.jpeg';
import solar from './solar.jpg';
import Authorpost from '../channel_template/channel_component/authorpost/authorpost';
const Channel = () => {
    return ( 
        <div className="channel">
               <div className="upper">
                   <div className="bannerbox"><img src={solar} id="imagebanner"/></div>
                      
                      <div className="channelnamebox">
                             <div className="profileimagebox"><img src={img} className="profileimage"/></div>
                             <div className="userprofiletext">
                                <div className="profilenamebox"><p className="mainheading">RAUSHAN KUMAR</p>
                                </div>
                                 <div className="userworkplace">scientist,CERN  LAB</div>
                             </div>
                      </div>
                                 

                                
                      <div className="channelheading">
                        
                        
                           <span  className="userniche">Post</span>
                          <span  className="userniche">Niche</span>
                          <span className="userniche">About</span>
                     </div>
                     <div className="hr"><hr/></div>
                       
                   
                </div>
              <div className="lower">
                           <Authorpost/>
              </div>
           


        </div>
     );
}
 
export default Channel;