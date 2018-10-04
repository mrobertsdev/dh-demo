import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import './App.css';

const App = withRouter(props => {
    let getName = props.location.pathname;

    if (getName === '/') {
        getName = '/home';
    }
    
    return (
      <div className="container">
        <div className={ "container-inner con-class page-" + getName.replace(/\W+/g, '-').toLowerCase() }>
          <header className="container-header-wrap">
              <Header />
              <HeaderMobile />
          </header>
          <div className="container-mid-body-wrap">
            <main className="container-content-wrap">
              <Main />
            </main>
            <div className="container-footer-wrap">
              <Footer />
            </div>
            
            <span className="shade"></span>
          </div>
        </div>
      </div>
    );
});

export default App;