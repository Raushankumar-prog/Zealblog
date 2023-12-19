import './channel.css';

const Channel = () => {
    return ( 
        <div id="channel">
               <div className="upper">
                   <div id="bannerbox"><img src="" id="imagebanner"></img>  </div>
                      
                      <div id="channelnamebox">
                             <div className="profileimagebox"><img src=" "className="profileimage"/></div>
                             <div className="userprofiletext">
                                <div className="profilenamebox"><p>username</p></div>
                                 <div className="userworkplace"><p>scientist at CERN  LAB</p></div>
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