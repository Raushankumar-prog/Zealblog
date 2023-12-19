import './channel.css';
import img from '../Glance/OIP.jpeg';
const Channel = () => {
    return ( 
        <div className="channel">
               <div className="upper">
                   <div className="bannerbox"><img src={img} id="imagebanner"></img>  </div>
                      
                      <div className="channelnamebox">
                             <div className="profileimagebox"><img src={img} className="profileimage"/></div>
                             <div className="userprofiletext">
                                <div className="profilenamebox"><p className="mainheading">RAUSHAN KUMAR</p>
                                </div>
                                 <div className="userworkplace">scientist,CERN  LAB</div>
                             </div>
                      </div>
                                 
                      <div className="channelheading">
                          <div className="profilehome"><p>home</p></div>
                          <div className="userniche"><p>niche</p></div>
                          <div className="about"><p> about</p></div>


                     </div>
                   
                </div>
              <div className="lower">

              </div>
           


        </div>
     );
}
 
export default Channel;