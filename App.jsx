import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,browserHistory,hashHistory } from 'react-router';
import ResetCss from './node_modules/reset-css/reset.css'
import CSS from './scss/app.scss'
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import MyWork from './components/MyWork.jsx';
import AboutMe from './components/AboutMe.jsx';
import HireMe from './components/HireMe.jsx';
import ReactGA from 'react-ga';

class App extends React.Component {
  fireTracking() {
    ReactGA.pageview(window.location.hash);
  }
  handleClick() {
    ReactGA.event({
        category: 'Navigation',
        action: 'Clicked Link',
    });
  }
  render(){
    return(
          <Router history={hashHistory} onUpdate={this.fireTracking}>
            <Route path='/' component={Home} />
            <Route path='home' component={Home} />
            <Route path='mywork' component={MyWork} />
            <Route path='aboutme' component={AboutMe} />
            <Route path='hireme' component={HireMe} />
          </Router>
    );
  }
}
export default App;
