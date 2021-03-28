import React from 'react';
import Layout from './Layout.jsx';
import Social from './Social.jsx';
import { Link } from 'react-router-dom';

class AboutMe extends React.Component {
  render(){
    return(
      <Layout title="About me">
       <div className='container'>
         <div className="row">
           <div className="kw-aboutme col-lg-12">
              <p>Hey, I’m an professional front end developer from Pune, India. I work primarily with Angular and React.</p>
              <p>I finished my engineering from an college in Pune India, named PCCOE in 2012, and started my Career with Tata Consultency Services the same year.
I had interest in web technology since college days, having worked on multiple personal assignments to having Multi-Geographical client exposure, helped a lot to groom my personally & professionally.</p>
              <h2 className="title">What I have been working lately ?</h2>
              <ul>
                <li>Getting hornes of ES6, and React has blown by mind!</li>
                <li>Moved my website with amazing combination of React + ES6 + Webpack + Babel</li>
                <li>A small project with Angular 2 is also on card, as I learn ES6/TypeScript of Ng 2.</li>
                <li>Earning bread & buttur with office assignments held on Angular 1 and that old technology stack.</li>
              </ul>
              <p>Have a look through some of <Link to="/mywork">my work</Link> and <Link to="/myblog">blog posts</Link> and consider <Link to="/hireme">hiring me</Link> :)</p>
           </div>
         </div>
         <Social/>
       </div>
     </Layout>
    );
  }
}
export default AboutMe;
