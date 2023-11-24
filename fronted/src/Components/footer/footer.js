import './footer.css';


const Footer = () => {
    return ( <div className="footer">
            <div className="size">
              <p className="line">Zealblog is platform where author can post the article.</p> 
              <hr></hr>
          
            <div className="action">
                <div className="first">
                    <div className="a1">Author</div>
                    <div className="a1">cookies policy</div>
                    <div className="a1">web notifications</div>
                </div>
                <div className="second">
                     <div className="a">careers</div>
                    <div className="a">terms & conditions</div></div>
                <div className="third">
                       <div className="a">topics</div>
                    <div className="a">advertise with us</div>
                </div>
                  </div>
                  <hr></hr>
                  <div className="address">
                    <p className="line">&copy;Dehradun,Uttrakhand,India</p>
                  </div>
            </div>
    </div> );
}
 
export default Footer;