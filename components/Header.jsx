import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  constructor(){
    super();
    this.handleNavLinkToggle = this.handleNavLinkToggle.bind(this);
  }
  handleNavLinkToggle(e){
    var button = ReactDOM.findDOMNode(this.refs.navButton);
    button.classList.toggle('open');
    var node = ReactDOM.findDOMNode(this.refs.navLinks);
    node.classList.toggle('open');
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
                      <img src='/images/logo.gif' />
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
                  <div ref="navButton" className='kw-header__nav-button' onClick={this.handleNavLinkToggle}>
                    <span className="kw-header__nav-button-arrow"></span>
                    <span className="kw-header__nav-button-arrow"></span>
                  </div>
                  <div ref="navLinks" className='kw-header__nav-links'>
                    <ul>
                        <li><Link to="/hireme" className="hire-me" activeClassName="active">Hire me!</Link></li>
                        <li><Link to="/mywork" activeClassName="active">My work</Link></li>
                        <li><a href="http://blog.rajeshkw.in">My Blog</a></li>
                        <li><Link to="/aboutme" activeClassName="active">About me</Link></li>
                        <li><Link to="/home" activeClassName="active">Home</Link></li>
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
