import React, { useState, useEffect } from 'react';
import './profile.css';
import Cookies from 'js-cookie';
import Channel from '../../../Ui/Channel/Channel';
import { makeRequest } from '../../../../Service/Fetch/Fetch';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Profile = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localCheckUsername, setLocalCheckUsername] = useState(false);

  const user = {
    username: username,
    password: password
  };

  const getdata = async () => {
    try {
      const data = await makeRequest('/user', 'POST', user);
      const token = data.token;
      const usernam = data.user.username;
      const id = data.user.id;

      Cookies.set('token', token, { expires: 7, secure: true });
      Cookies.set('usernam', usernam, { expires: 7, secure: true });
      Cookies.set('id', id, { expires: 7, secure: true });

      // Update the local state
      setLocalCheckUsername(true);
    } catch (error) {
      console.warn(error.message);
    }
  };

  const login = async () => {
    try {
      const data = await makeRequest('/signin', 'POST', user);
      const token = data.token;
      const usernam = data.user.username;
      const id = data.user.id;
         
      Cookies.set('token', token, { expires: 7, secure: true });
      Cookies.set('usernam', usernam, { expires: 7, secure: true });
      Cookies.set('id', id, { expires: 7, secure: true });
      
      // Update the local state
      setLocalCheckUsername(true);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    // Check if the username is present in cookies
    const checkUsername = Cookies.get('usernam');
  
    if (checkUsername) {
      setLocalCheckUsername(true);
    }
  }, []);
  const providedId=Cookies.get('id');




  
  return (
    <div id="profilebox">
      {localCheckUsername ? (
        <div id="content"><Channel providedId={providedId} /></div>
      ) : (
        <>
          <div align="center"> <Link to='/login'><Button variant='contained' >login</Button></Link></div><br></br>
           <div align="center"><Link to='/signUp'  ><Button variant='contained'>SignUp</Button></Link></div> 
        </>
      )}
    
    </div>
  );
};

export default Profile;
