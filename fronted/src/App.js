import './App.css';
import Footer from './Components/footer/footer';
//import {Link} from 'react-router-dom';
import Routing from './Routes/route';
import Left from './Components/left/left';
import Heading from './Components/header/header';
import Glance from './Components/Glance/glance';  
function App() {
  return (
    <div className="hu">

 <Routing/>
 
 <Heading/>
 <div className="main">
 <Left/>
 <div className="glance">
 <Glance/>
 </div>
 </div>

 <Footer/>
    
</div>
  );
}

export default App;

