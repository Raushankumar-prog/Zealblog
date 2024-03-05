import Pagination from '../ui/pagination/pagination';
import './footer.css';
import {Link} from 'react-router-dom';


const Footer = () => {
    return ( <div className="footer">
            <div className="size">
              
              <p className="line">Zealblog is platform where author can post the article.</p> 
             <hr></hr>
          
            <div className="action">
                <div className="first">
                  
                   <Link to="/cookiespolicy" className="link"><div className="a1">cookies policy</div></Link>
                    <Link to="/notification" className="link"><div className="a1">web notifications</div></Link>
                </div>
                <div className="second">
                     <Link to="/careers" className="link"><div className="a">Career</div></Link>
                     <Link to="/terms&conditions" className="link"><div className="a">terms & conditions</div></Link></div>
                <div className="third">
                     <Link to="/" className="link"><div className="a">topics</div></Link>
                     <Link to="/advertising" className="link"><div className="a">advertise with us</div></Link>
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