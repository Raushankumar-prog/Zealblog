import './notification.css';
import React from 'react';

const NotificationButton = () => {
  const showNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Hello, World!');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Hello, World!');
        }
      });
    }
  };

  return (
    <button onClick={showNotification}>
      Show Notification
    </button>
  );
};

const Notification = () => {
  return (
    <div>
      <h1>Notification Example</h1>
      <NotificationButton />
    </div>
  );
};

export default Notification;
