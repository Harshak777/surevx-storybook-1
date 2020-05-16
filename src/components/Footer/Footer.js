import React from 'react';
import './Footer.css';

const Footer = () => (
<div className="footer">
    <div className="left" id="left">
        <p>© SureVX 2020 <a href="">Home</a> <a href="">Help</a> </p>
    </div>
    <div className="right" id="right">
        <p><a href="">Setting</a> <a href="">Profile</a> <a id="high" href="">App</a> <a href="">Privacy</a> <a href="">Contact</a> </p>
    </div>
</div>
);

export default Footer;