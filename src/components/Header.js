import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

class Header extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    document.body.classList.add('desktop-menu-open');
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      document.body.classList.remove('desktop-menu-open');
    }
  }

  render() {
    return (
      <div className="container-inner-wrap header-desktop">
        <nav className="topbar">
            <ul className="topbar-left">
            <li><Link to="/" clat="Logo"></Link></li>
            <button className={ "hamburger hamburger--spin" + (this.state.showMenu ? " is-active" : "") } type="button" onClick={this.showMenu}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
            </ul>
            <ul className="topbar-right">
            <li className="nav-dailyhive"><NavLink  alt="Daily Hive"  exact to="/"></NavLink></li>
            <li className="nav-dished"><NavLink     alt="Dished"      exact to="/dished"></NavLink></li>
            <li className="nav-grow"><NavLink       alt="Grow"        exact to="/grow"></NavLink></li>
            <li className="nav-urbanized"><NavLink  alt="Urbanized"   exact to="/urbanized"></NavLink></li>
            <li className="nav-mapped"><NavLink     alt="Mapped"      exact to="/mapped"></NavLink></li>
            <li className="nav-video"><NavLink      alt="Video"       exact to="/video"></NavLink></li>
            <i className="fa fa-2 fa-search search-button"></i>
            </ul>
        </nav>
        <div className={ "header-menu" + (this.state.showMenu ? " show-menu" : "") }
          ref={(element) => {
            this.dropdownMenu = element;
          }}>
          <div className="header-menu-inner mega-menu-dropdown">
            
            <div className="row">
              <div className="col m-3-12">
                <ul className="select-city menu vertical">
                  <li className="in-active">
                    <Link className="desktop logo calgary location" to="/demo"></Link>
                  </li>
                  <li className="in-active">
                    <Link className="desktop logo montreal location" to="/demo"></Link>
                  </li>
                  <li className="in-active">
                    <Link className="desktop logo toronto location" to="/demo"></Link>
                  </li>
                </ul>
              </div>
              <div className="col m-9-12">
                <div className="col m-3-12">
                  <ul className="categories">
                    <li className="trending"><Link to="/demo">Trending</Link></li>
                    <li className="latest"><Link to="/demo">Latest</Link></li>
                    <li><Link to="/demo">Food</Link></li>
                    <li><Link to="/demo">News</Link></li>
                    <li><Link to="/demo">Things To Do</Link></li>
                    <li><Link to="/demo">Events Calendar</Link></li>
                    <li><Link to="/demo">Business</Link></li>
                  </ul>
                </div>
                <div className="col m-3-12">
                  <ul className="categories">
                    <li><Link to="/demo">Real Estate</Link></li>
                    <li><Link to="/demo">Sports</Link></li>
                    <li><Link to="/demo">Life</Link></li>
                    <li><Link to="/demo">Travel</Link></li>
                    <li><Link to="/demo">Arts</Link></li>
                    <li><Link to="/demo">Contests</Link></li>
                    <li><Link to="/demo">Photos</Link></li>
                  </ul>
                </div>
                <div className="col m-3-12">
                  <ul className="categories">
                    <li><Link to="/demo">Videos</Link></li>
                    <li><Link to="/demo">Tips</Link></li>
                    <li><Link to="/demo">Masthead</Link></li>
                    <li><Link to="/demo">Creative</Link></li>
                    <li><Link to="/demo">Careers</Link></li>
                    <li><Link to="/demo">Advertise with us</Link></li>
                    <li><Link to="/demo">Contact us</Link></li>
                  </ul>
                </div>
                <div className="col m-3-12"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
