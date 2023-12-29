import React, { useState, useEffect } from 'react';
import './profile.css';
import Cookies from 'js-cookie';
import Channel from '../../../channel_template/channel';
import  {makeRequest}  from '../../../fetch/fetch';



const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkusername, setCheckUsername] = useState(false);

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

      setCheckUsername(true);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    // Check if the username is present in cookies
    const checkUsername = Cookies.get('usernam');
    if (checkUsername) {
      setCheckUsername(true);
    }
  }, []);

  return (
    <div>
      {checkusername ? (
        <div id="content"><Channel /></div>
      ) : (
        <div id="form">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
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
              <label htmlFor="password">Password:</label>
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
      )}
    </div>
  );
};

export default Profile;
