import React, { useState, useEffect } from 'react';
import './profile.css';
import Cookies from 'js-cookie';
import Channel from '../../../channel_template/channel';
import { makeRequest } from '../../../services/fetch/fetch';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

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

  return (
    <div id="profilebox">
      {localCheckUsername ? (
        <div id="content"><Channel /></div>
      ) : (
        <Paper style={{ width: '50%', marginLeft: '14%', marginTop: '6%' }}>
          <div id="formlogin">
            <form>
              <div className="form-group">
                <label htmlFor="username" className='labeltext'>Username:</label><br/>
                <input
                  type="text"
                  placeholder="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className='labeltext'>Password:</label><br/>
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <button type="button" onClick={getdata} className="btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Paper>
      )}
      {/* Render Channel only when localCheckUsername is true */}
      
      {!localCheckUsername && (
        <Button onClick={() => login()}>login</Button>
      )}
    </div>
  );
};

export default Profile;
