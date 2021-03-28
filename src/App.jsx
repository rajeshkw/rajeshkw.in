import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home.jsx';
import MyWork from './components/MyWork.jsx';
import AboutMe from './components/AboutMe.jsx';
import HireMe from './components/HireMe.jsx';
import ReactGA from 'react-ga';
import './scss/App.scss';

class App extends React.Component {
  fireTracking() {
    // ReactGA.pageview(window.location.hash);
  }
  handleClick() {
    ReactGA.event({
        category: 'Navigation',
        action: 'Clicked Link',
    });
  }
  render(){
    return(
          <Router onUpdate={this.fireTracking}>
              <Switch>
                  <Route path='/home' component={Home}></Route>
                  <Route path='/test' component={MyWork}></Route>
                  <Route path='/aboutme' component={AboutMe}></Route>
                  <Route path='/hireme' component={HireMe}></Route>
                  <Route path='/' component={Home}></Route>
              </Switch>

          </Router>
    );
  }
}
export default App;
