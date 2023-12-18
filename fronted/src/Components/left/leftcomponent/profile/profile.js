import React, { useState } from 'react';
import './profile.css';

const str = "http://localhost:4001/user";

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getdata = () => {
    const url = new URL(str);
    const req = new Request(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-steve': 'hello'
  },
  mode:"no-cors",
  cache:"no-store",
  body: JSON.stringify({
    'username': username,
    'password': password,
  }),
});


    fetch(req)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid");
        }
        return res.json();
      })
      .then((data) => {
        // Handle the data received from the server
        console.log(data);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }

  return (
    <div>
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
  );
}

export default Profile;
