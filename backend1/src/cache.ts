import { createClient } from 'redis';


const client = createClient({
    password: process.env.REDIS_PW,
    socket: {
        host: process.env.REDIS_HOST ,
        port: Number(process.env.REDIS_PORT) 
      
    },
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});
 

    client.connect();
  console.log('Connected to Redis');



export default client;
