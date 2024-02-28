import React from 'react';
import './glance.css'; 
  
 export const getRandomColor=()=>{
  
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    
    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    return randomColor;
}

const Glance = () => {
     return ( 
              <div className="main1"> 
          
                  
         </div>
    );
}
 
export default Glance;
