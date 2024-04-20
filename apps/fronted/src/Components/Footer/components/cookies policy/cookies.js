import React from 'react';
import './cookies.css';  // Import the CSS file for styling

const Cookies = () => {
    return (
        <div className="cookies-container">
            <h2 className="cookies-header">Cookies Policy</h2>
            <p>This website uses cookies to ensure you get the best experience on our website.</p>

            <h3>What are cookies?</h3>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help websites remember your preferences, enhance your user experience, and provide anonymous tracking data to website owners for analysis.</p>

            <h3>How we use cookies</h3>
            <p>We use cookies for various purposes, including:</p>
            <ul>
                <li>Ensuring the proper functioning of the website</li>
                <li>Improving your browsing experience</li>
                <li>Analyzing website traffic and performance</li>
                <li>Customizing content and advertisements</li>
            </ul>

            <h3>Types of cookies we use</h3>
            <p>We use both session and persistent cookies on our website. Session cookies are temporary and are deleted when you close your browser, while persistent cookies remain on your device for a longer period.</p>

            <h3>Managing cookies</h3>
            <p>You can control and manage cookies in your browser settings. Most browsers allow you to refuse or accept cookies, delete specific cookies, or disable certain types of cookies. However, blocking cookies may affect your experience on the website.</p>

            <h3>Changes to our Cookies Policy</h3>
            <p>We may update our Cookies Policy from time to time. Please check this page periodically for any changes. Your continued use of the website after the posting of changes constitutes your acceptance of those changes.</p>

            <p>If you have any questions about our Cookies Policy, please contact us.</p>
        </div>
    );
}

export default Cookies;
