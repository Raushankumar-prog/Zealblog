import './App.css';
import Routing from './Routes/route';
import Left from './Components/Left/Left';

import Header from './Components/Header/Header';
import { useState } from 'react';





function App() {
const [le,setle]=useState(false);





  return (
    
    
 <div className="main">
 
  <div className="appheading"><Header  le={le} setle={setle}/></div>
 <div className="appleft"><Left   le={le} setle={setle} /></div>
<div className="approuting"><Routing/></div>
 </div>

  

  );
}

export default App;

