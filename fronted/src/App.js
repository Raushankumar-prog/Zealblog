import './App.css';
import Footer from './Components/footer/footer';
//import {Link} from 'react-router-dom';
import Routing from './Routes/route';
import Left from './Components/left/left';
import Heading from './Components/header/header';
function App() {
  return (
    <div className="hu">

 <Routing/>
 <Heading/>
 <Left/>
 <Footer/>
    
    </div>
  );
}

export default App;

