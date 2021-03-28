import React from 'react';
import Layout from './Layout.jsx';
import Social from './Social.jsx';
import ContactMe from './ContactMe.jsx';
import { Link } from 'react-router-dom';

class HireMe extends React.Component {
  render(){
    return(
      <Layout title="Hire me!">
       <div className='container'>
         <div className="row">
            <div className="kw-hireme col-lg-8 offset-lg-2">
              <h1>Looking for Front End Champion?</h1>
              <p className="kw-hireme__sub">Angular . React . Node . Grunt . Webpack . Responsive . HTML5 . SASS</p>
              <div className="kw-hireme__description">
                  <p>Internet evolved so were the technology pillars of it, i am the guy who can help you get to meet what you looking for. I have vast experience of 4.5years (well as of now!) in front end development with all those modern technologies to build that awesome thing you dreamed about. </p>
                  <p>I started my career with that old school <i>HTML/CSS</i> pages, and boomed to start with project built on <i>Backbone.js</i> , awesomeness that striked MVC in my brain.</p>
                  <p>Later in 2014, CakePHP thrilled my veins to visualize projects from Concepts to Completion. Ohho! Full Stack with CakePHP!</p>
                  <p>Since after 2014, <i>Angular 1</i> was my major as was the organization whom i helped grow then, it was an amazing journey with <i>Node.js</i>, <i>Grunt</i>, <i>Karma</i>, <i>Jasmine</i>, <i>Protractor</i>, and offcourse <i>HTML5 & SASS</i> (yes i never prefered writing CSS the day SASS was born!)</p>
                  <p>Boarded onto Web content accessibility during the same period with exposure to AAA.</p>
                  <p>Career moves got me to work on <i>Javascript MVC</i>, that <i>Steal.js</i> & Embedded Javascript (<i>EJS</i>) framework, and then on <i>Oracle Web Content Management System</i>. Learned!</p>
                  <p>Curently catching up on ES6 & TypeScript with POC on <i>Angular 2</i></p>
                  <p>This site is build on <i>ES6, React & Webpack</i>, Amazing stuff it was to learn!!</p>
                  <p>See <Link to="/mywork">my work</Link> in IT industry, send me an email on <a href="mailto:rajeshkw2007@gmail.com">rajeshkw2007@gmail.com</a> let's discuss it further :)</p>
              </div>
              <ContactMe/>
              <Social/>
            </div>
          </div>
       </div>
     </Layout>
    );
  }
}
export default HireMe;
