import React from 'react';
import './style.css';

const Footer = () => (
    <div className="footer">
        <div className="left" id="left">
            <p>
                © SureVX 2020 
                <a href="">Home</a>
                <a href="">Help</a> 
            </p>
        </div>
        <div className="right" id="right">
            <p>
                <a href="https://surevx.co">Settings</a> 
                <a href="https://surevx.co">Profile</a> 
                <a id="high" href="https://surevx.co">App</a> 
                <a href="https://surevx.co">Privacy</a> 
                <a href="https://surevx.co">Contact</a>
            </p>
        </div>
    </div>
);

export default Footer;