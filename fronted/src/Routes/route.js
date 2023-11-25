import {Routes,Route} from 'react-router-dom';
import Author from '../Components/footer/components/author/author';


const Routing = () => {
    return ( <div>
        <Routes>
      <Route path="/author" element={<Author/>}/>
       </Routes>
    </div> );
}
 
export default Routing;