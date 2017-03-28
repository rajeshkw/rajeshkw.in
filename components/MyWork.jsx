import React from 'react';
import Layout from './Layout.jsx';
import WorkItems from './WorkItems.jsx';

class MyWork extends React.Component {
  constructor(){
    super();
    this.state = {
      logoList : [
        { src:'/images/front-end-html5-css3-js.png',width:'150',height:'auto'},
        { src:'/images/jquery.png',width:'250',height:'auto'},
        { src:'/images/React-JS.sh.png',width:'auto',height:'180'},
        { src:'/images/angularjs-development-companies-india.png',width:'250',height:'auto'},
        { src:'/images/angularjs_logo.svg_.png',width:'200',height:'auto'},
        { src:'/images/sass-less--1-.png',width:'250',height:'auto'},
        { src:'/images/grunt.png',width:'150',height:'auto'},
        { src:'/images/Node.js_logo.svg.png',width:'200',height:'auto'},
        { src:'/images/es6-webpack-react-babel.png',width:'350',height:'auto'},
        { src:'/images/backbone.png',width:'150',height:'auto'},
        { src:'/images/karma_jasmine.jpg',width:'300',height:'auto'}
      ]
    }
  }
  render(){
    return(
      <Layout title='My Work'>
       <div className='container'>
         <div className="row">
           <div className="kw-mywork col-lg-12">
             <p>I finished my engineering from an college in Pune India, named PCCOE in 2012, and started my Career with Tata Consultency Services the same year.</p>
             <p>I had interest in web technology since college days, having worked on multiple personal assignments to having Multi-Geographical client exposure, helped a lot to groom my personally & professionally.</p>
             <div className="row kw-mywork__content">
               <div className="col-lg-3">
                 <img src='/images/tcs.svg' width='250' />
               </div>
               <div className="col-lg-9 kw-mywork__content-text">
                 <p>Since 3rd December 2012 to 16th November 2015</p>
                 <p>Started my career as front end developer with Backbone.js & HTML5/SASS under Digital Shared Services.</p>
                 <p>Multiple projects (undisclosable) with Core Javascript, jQuery, Backbone, Angular, Node, Grunt which all had Responsive web design. </p>
               </div>
             </div>
             <div className="row kw-mywork__content">
               <div className="col-lg-3">
                 <img src='/images/barclays-og.png' width='250' />
               </div>
               <div className="col-lg-9 kw-mywork__content-text">
                 <p>Since 23rd November 2015 to 20th April 2017</p>
                 <p>Worked as an experience resource leading a team of 9 front end developers to deliver many projects.</p>
                 <p>Got to master Barclays client side frameworks, with Core Javascript , Javascript with Prototype based MVC, Angular 1, Steal.js, EJS, Node, Grunt, Gulp, Webpack and ES6 based Barclays framework.</p>
               </div>
             </div>
             <h2>My Technology Cloud</h2>
             <div className="separator" />
             <WorkItems>
               {
                 this.state.logoList.map((item,index)=>
                   <div key={index} className="kw-mywork__content-item">
                     <img src={item.src} width={item.width} height={item.height} />
                   </div>
                 )
               }
             </WorkItems>
           </div>
         </div>
       </div>
     </Layout>
    );
  }
}
export default MyWork;
