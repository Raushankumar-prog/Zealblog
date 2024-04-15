import '../Channel/Channel.css';
import { useParams } from 'react-router-dom';
import Channel from '../Channel/Channel';


const U = () => {
  const { userId } = useParams();

  return (
    <>
      <Channel  providedId={userId}/>
    
    </>
  );
};

export default U;

           
      
         