import './subscribe.css';
import { fetchSubsciber } from '../../../../Service/HttpRequest/ApiSubscriber';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const [subscriber, setSubscriber] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subscriberData = await fetchSubsciber();
      
        setSubscriber(subscriberData);
      } catch (error) {
        console.error('Error fetching subscriber data:', error.message);
        setSubscriber([]);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      {subscriber && subscriber.length > 0 ? (
        subscriber.map((data) => (
         <Link to={data.beongsto ? `/${data.beongsto.id}` : '/unknownUser'} className='link'><div key={data.id}>
            <img src={data.image} alt='userimage' className='userimagesubscriber' />
            <div className='subscribedname'>{data.username}</div>
          </div>
          </Link> 
        ))
      ) : (
        <div>Not following any writer</div>
      )}
    </>
  );
};

export default Subscribe;
