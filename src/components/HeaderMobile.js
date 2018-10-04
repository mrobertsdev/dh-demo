import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderMobile extends Component {
    render() {
        return (
            <div className="container-inner-wrap header-mobile">
                <div className="topbar-mobile">
                    <Link to="/"></Link>
                </div>
            </div>
        );
    }
}

export default HeaderMobile;