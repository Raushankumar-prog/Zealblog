import './App.css';
import Footer from './Components/Footer/footer';
import Routing from './Routes/route';
import Left from './Components/Left/Left';
//import Heading from './Components/Header/Header.js';
// import LoginButton from  './Components/googlelogin/login.js';
// import LogoutButton from './Components/googlelogin/logout.js';
//import { useEffect } from 'react';
//import {gapi} from 'gapi-script';
import Header from './Components/Header/Header';

const clientId="700675575965-p4ipb35g1t1u5ahni9gj1gali8e667i1.apps.googleusercontent.com";



function App() {
     






  return (
    <div className="hu">
    <Header/>
 <div className="main">
 <Left/>

 <div className="glance">
<Routing/>


 </div>
 </div>

  
</div>
  );
}

export default App;

