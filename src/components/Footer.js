import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="container-inner-wrap">
        <div className="footer-nav">
            <ul className="footer-nav-links">
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Advertise With Us'} }}>ADVERTISE WITH US</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Masthead'} }}>MASTHEAD</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Careers'} }}>CAREERS</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Contact Us'} }}>CONTACT US</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Creative'} }}>CREATIVE</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Tips'} }}>TIPS</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'RSS'} }}>RSS</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Disclaimer'} }}>DISCLAIMER</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Disclosure'} }}>DISCLOSURE</Link></li>
                <li><Link to={{ pathname: '/demo/with_title', state: { title: 'Policies'} }}>POLICIES</Link></li>
            
                {/* <li><NavLink to="/example" activeClassName="active">Topics</NavLink></li> */}
            </ul>
            <p className="footer-nav-copy">&copy; 2018 Buzz Connected Media Inc.</p>
        </div>
    </div>
  );
  
export default Footer;