import React, { useState, useEffect } from 'react';
import './profile.css';
import Cookies from 'js-cookie';
import Channel from '../../../channel_template/channel';

const apiUrl = "http://localhost:4001/user";

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkusername, setCheckUsername] = useState(false);

  const user = {
    username: username,
    password: password
  };

  const getdata = () => {
    const url = new URL(apiUrl);
    const req = new Request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user),
    });

    fetch(req)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid");
        }
        return res.json();
      })
      .then((data) => {
        const token = data.token;
        const usernam = data.user.username;
        const id = data.user.id;
        Cookies.set('token', token, { expires: 7, secure: true });
        Cookies.set('usernam', usernam, { expires: 7, secure: true });
        Cookies.set('id', id, { expires: 7, secure: true });
        setCheckUsername(true);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }

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
        <div id="content"><Channel/></div>
      ) : (
        <div id="form">
          <form>
            <label>username:</label>
            <input
              type="text"
              placeholder='username'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>password:</label>
            <input
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' onClick={getdata}>submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
