import React from 'react';
import Layout from './Layout.jsx';
import Social from './Social.jsx';
import Footer from './Footer.jsx';
import { Link, IndexLink } from 'react-router';

class Home extends React.Component {
  constructor(){
    super();
    document.title = "Rajesh Wasave : Home"
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className='kw-home__card'>
                <div className="kw-home__card-logo">
                    {/*<div className="kw-home__card-logo-circle"></div>
                    <div className="kw-home__card-logo-text">
                      <span>KW</span>
                      <span className="kw-home__card-logo-text-sub">POWERED</span>
                    </div>
                    <div className="kw-home__card-logo-text-bar">
                      <span className="kw-home__card-logo-text-bar-block"></span>
                    </div>*/}
                    <img src='/images/logo.gif' />
                </div>
                <div className="kw-home__card-text">
                    <p className="kw-home__card-text-title">Rajesh Wasave</p>
                    <p className="kw-home__card-text-sub"> Front End Developer</p>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="separator"></div>
            <div className="kw-home__description">
              <p>Hey, I’m an professional front end developer from Pune, India. I work primarily with Angular and React.</p>
              <p>Have worked with Tata Consultency Services & Barclays Technology Centre of India on numerous assignments.</p>
              <p>Have a look through <Link to="/mywork">my work</Link> and <a href="http://blog.rajeshkw.in">blog posts</a>. Learn a bit more <Link to="/aboutme">about me</Link> and then consider <Link to="/hireme">hiring me</Link> :)</p>
            </div>
            <Social/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Home;
