import './App.css';
import Footer from './Components/footer/footer';
import {Link} from 'react-router-dom';
import Routing from './Routes/route';


function App() {
  return (
    <div className="hu">
      <p>
        Initializing the project.
      </p>
      <Link to="/author">friend</Link>
 <Routing/>
 <Footer/>
    
    </div>
  );
}

export default App;
