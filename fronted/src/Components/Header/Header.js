import './Header.css';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../Service/Fetch/Fetch';
import Cookies from 'js-cookie';
import { Button } from '@mui/material';

export default function Header({le,setle}) {
    const [imageUrl, setImageUrl] = useState(null);
    const [checkinguserid, setCheckingUserId] = useState(null); 

    useEffect(() => {
        async function fetchData() {
            const userId = Cookies.get('usernam');
           
            try {
                 const imageName = Cookies.get('image');
                if(userId){
                     const { imageUrl } = await makeRequest(`/api/getimage/${imageName}`, 'GET');
              
                
               
                setImageUrl(imageUrl);
                }
                setCheckingUserId(userId); 
                
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        }

        fetchData();
    }, [imageUrl]);

    return (
        <div className="heading">
            <div className="logo">
                <div className="menu"  onClick={()=>setle(!le)}><MenuIcon/></div>
                <div className="image">
                   
                    <div className='apple'>
                        <div className='Finglobal'>finglobal</div>
                         <div className='com'>.tech</div>
                    </div>
                   
                       
                   
                </div>
            </div>
            <div className="inflex">
               {/*<div className="notification"><NotificationsIcon/></div>*/}
                {checkinguserid ? (
                    <img src={imageUrl} alt="Userprofile" id="profileimage" className="signupimage"/>
                ) : (
                    <>
                        <div className="signup"><Link to='/signup' className='remove'><Button variant='contained'>SignUp</Button></Link></div>
                       
                    </>
                )}
            </div>
        </div>
    );
}
