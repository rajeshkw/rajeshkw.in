import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    state = { navOpen  : false };


  handleNavLinkToggle(e){
      this.setState({ navOpen: !this.navOpen });
  }
  render(){
    return(
      <header className='kw-header container'>
        <div className='row'>
            <div className='col-m-4 col-lg-4'>
              <div className='kw-header__card'>
                  <div className="kw-header__card-logo">
                      {/*<div className="kw-header__card-logo-circle"></div>
                      <div className="kw-header__card-logo-text">
                        <span>KW</span>
                        <span className="kw-header__card-logo-text-sub">POWERED</span>
                      </div>
                      <div className="kw-header__card-logo-text-bar">
                        <span className="kw-header__card-logo-text-bar-block"></span>
                      </div>*/}
                      <img src='images/logo.gif' />
                  </div>
                  <div className="kw-header__card-text">
                      <p className="kw-header__card-text-title">Rajesh Wasave</p>
                      <p className="kw-header__card-text-sub"> Front End Developer</p>
                  </div>
              </div>
            </div>
            {/*
            <div className='col-2'>
              <div className="kw-header__experience">
                  <span>Exp. </span>
                  <span>4.6yrs</span>
              </div>
            </div>
            */}
            <div className='col-m-8 col-lg-8'>
              <nav className='kw-header__nav'>
                  <div className={`kw-header__nav-button ${ this.state.navOpen ? 'open': '' }`} onClick={this.handleNavLinkToggle}>
                    <span className="kw-header__nav-button-arrow"></span>
                    <span className="kw-header__nav-button-arrow"></span>
                  </div>
                  <div className={`kw-header__nav-links ${ this.state.navOpen ? 'open': '' }`}>
                    <ul>
                        <li>
                            <NavLink to="/hireme" className="hire-me" activeClassName="active">Hire me!</NavLink>
                        </li>
                        <li><NavLink to="/mywork" activeClassName="active">My work</NavLink></li>
                        <li><a href="http://blog.rajeshkw.in">My Blog</a></li>
                        <li><NavLink to="/aboutme" activeClassName="active">About me</NavLink></li>
                        <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                    </ul>
                </div>
              </nav>
            </div>
        </div>
      </header>
    );
  }
}
export default Header;
