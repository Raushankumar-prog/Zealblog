import React from 'react';

const ShareButton = ({ title, url }) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          url: url,
        });
        console.log('Shared successfully');
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button onClick={handleShare}>
      Share
    </button>
  );
};

const MyComponent = () => {
  const shareTitle = 'Check out this amazing content!';
  const shareUrl = window.location.href;

  return (
    <div>
   
      <ShareButton title={shareTitle} url={shareUrl} />
    </div>
  );
};

export default MyComponent;
