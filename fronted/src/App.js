import './App.css';
import Footer from './Components/footer/footer';
import Routing from './Routes/route';
import Left from './Components/left/left';
import Heading from './Components/header/header';

function App() {
  
  return (
    <div className="hu">


 <div className="main">
 <Left/>
 
 <div className="glance">
<Routing/>
 </div>
 </div>
  <Footer/>
  
</div>
  );
}

export default App;

