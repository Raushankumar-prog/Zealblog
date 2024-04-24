import './Header.css';
import React, { useState, useEffect } from 'react';
import logo from '../../Asset/logo.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../Service/Fetch/Fetch';
import Cookies from 'js-cookie';

export default function Header() {
    const [imageUrl, setImageUrl] = useState(null);
    const [checkinguserid, setCheckingUserId] = useState(null); // Declare checkinguserid state

    useEffect(() => {
        async function fetchData() {
            const userId = Cookies.get('usernam');
           
            try {
                 const imageName = Cookies.get('image');
            
                const { imageUrl } = await makeRequest(`/api/getimage/${imageName}`, 'GET');
              
                setImageUrl(imageUrl);
                setCheckingUserId(userId); 
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="heading">
            <div className="logo">
                <div className="menu"><MenuIcon/></div>
                <div className="image">
                    <img src={logo} alt="Logo" />
                    <div className='apple'>APPLE</div>
                </div>
            </div>
            <div className="inflex">
                <div className="notification"><NotificationsIcon/></div>
                {checkinguserid ? (
                    <img src={imageUrl} alt="User Image" id="profileimage" className="signupimage"/>
                ) : (
                    <React.Fragment>
                        <div className="signup"><Link to='/signup' className='createremove'>SignUp</Link></div>
                        <div className="signup"><Link to='/login' className='createremove'>Login</Link></div>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}
