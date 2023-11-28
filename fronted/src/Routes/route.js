import {Routes,Route} from 'react-router-dom';
import Author from '../Components/footer/components/author/author';
import Mainpage from '../mainpage/mainpage';
import Glance from '../Components/Glance/glance';
// in the route we can make use of url-title defined in backend to show what we want to show in the url.
// for now i am using the mainpage

const Routing = () => {
    return ( <div>
        <Routes>
      <Route path="/author" element={<Author/>}/>
      <Route path="/" element={<Glance/>}/>
      <Route path="/mainpage" element={<mainpage/>}/>
       </Routes>
    </div> );
}
 
export default Routing;